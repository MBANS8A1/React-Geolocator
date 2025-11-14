import { useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation!");
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        isLoading(false);
      }
    );
  }
  return { error, isLoading, position, getPosition };
}
