import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});
  return <div className="App"></div>;
}

export default App;
