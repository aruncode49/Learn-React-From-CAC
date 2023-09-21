import { useState } from "react";
import "./App.css";

function App() {
  // initialize useState
  const [counterVariable, setCounterVariable] = useState(0);

  // increase value function
  function increaseValue() {
    if (counterVariable < 10) {
      // UseState update the UI in batches or group so, because there is no change in any function call the value updation remain same as previous
      setCounterVariable(counterVariable + 1);
      setCounterVariable(counterVariable + 1);
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
      <button onClick={increaseValue}>
        &uarr; Increase Value ( {counterVariable} ){" "}
      </button>
      <button onClick={decreaseValue}>
        &darr; Decrease Value ( {counterVariable} ){" "}
      </button>
    </>
  );
}

export default App;
