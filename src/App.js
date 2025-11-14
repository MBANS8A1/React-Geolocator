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

  return (
    <div className="App">
      <button onClick={getPosition} disabled={isLoading}>
        Get My Position
      </button>
    </div>
  );
}

export default App;
