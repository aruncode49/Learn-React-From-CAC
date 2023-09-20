import { useState } from "react";
import "./App.css";

function App() {
  // initialize useState
  const [counterVariable, setCounterVariable] = useState(0);

  // increase value function
  function increaseValue() {
    if (counterVariable < 10) {
      setCounterVariable(counterVariable + 1);
    }
  }

  // decrease value function
  function decreaseValue() {
    if (counterVariable > 0) {
      setCounterVariable(counterVariable - 1);
    }
  }

  return (
    <>
      <h1>Counter - {counterVariable}</h1>
      <button onClick={increaseValue}>&uarr; Increase Value </button>
      <button onClick={decreaseValue}>&darr; Decrease Value </button>
    </>
  );
}

export default App;
