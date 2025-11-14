import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

function App() {
  const {
    error,
    isLoading,
    position: { lng, lat },
    getPosition,
  } = useGeolocation();

  const [countClicks, setCountClicks] = useState(0);

  function handleCountClicks() {
    setCountClicks((click) => click + 1);
    getPosition();
  }

  return (
    <div className="App">
      <button onClick={handleCountClicks} disabled={isLoading}>
        Get My Position
      </button>

      {isLoading && <p>Loading your position...</p>}
      {error && <p>{error}</p>}
      {!error && !isLoading && lng && lat && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested your position {countClicks} times.</p>
    </div>
  );
}

export default App;
