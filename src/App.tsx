import { useMemo, useState } from "react";
const faces = ["heads", "tails"];
import "./App.css";

function App() {
  const [selectedFace, setSelectedFace] = useState("");
  const [coinFlipResult, setCoinFlipResult] = useState("");

  function flip() {
    let index;
    if (Math.random() < 0.5) {
      index = 0;
    } else {
      index = 1;
    }
    setCoinFlipResult(faces[index]);
  };
  const computerSelectedFace = useMemo(() => {
    const face = faces.find((f) => f !== selectedFace);
    return face;
  }, [selectedFace]);
  const isWin = useMemo(() => {
    return coinFlipResult === selectedFace;
  }, [coinFlipResult, selectedFace]);
  function showResult() {
    if (isWin) {
      return <h2>You win</h2>;
    }
    return <h2>You lost</h2>;
  };
  return (
    <div className="App">
      <div>
        <div>
          <h1>Select a face</h1>
          <button onClick={() => setSelectedFace("heads")}>Heads</button>
          <button onClick={() => setSelectedFace("tails")}>Tails</button>
        </div>
        <h3>You selected: {selectedFace}</h3>
        <h3>Computer selected: {computerSelectedFace}</h3>
        <button onClick={flip}>Flip Coin</button>
        {showResult()}
      </div>
    </div>
  );
}

export default App;
