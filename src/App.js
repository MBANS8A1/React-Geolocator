import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});

  function getPosition() {
    setCountClicks((click) => click + 1);

    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation!");
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
      setIsLoading(false);
    });
  }

  return <div className="App"></div>;
}

export default App;
