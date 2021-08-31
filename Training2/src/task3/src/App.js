import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [valueCountDown, setValueCountDown] = useState(-1);
  const [startCountDown, setStartCountDown] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    !isStop &&
      valueCountDown > 0 &&
      setTimeout(() => {
        setValueCountDown(valueCountDown - 1);
      }, 1000);
  }, [valueCountDown, isStop]);

  function handleCountdown(number) {
    console.log(number);
    setValue("");
    setStartCountDown(true);
    setIsStop(false);
    setValueCountDown(number);
  }

  function handleClick(value) {
    const typeOfValue = typeof value;
    console.log(typeOfValue);
    if (value.length === 0) {
      alert("Please input a number");
    } else if (isNaN(value) === false) {
      if (value <= 0) alert("Number must be greater than 0");
      else {
        handleCountdown(value);
      }
    } else alert("Invalid input. Must be a number");
  }

  return (
    <div className="App">
      <h1>TRAINING2 TASK 3 </h1>
      <input
        name="text"
        placeholder="Enter a number"
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => handleClick(value)}>Start</button>
      {startCountDown && (
        <div>
          <h3>{valueCountDown}</h3>
          {!isStop ? (
            <button
              onClick={() => {
                setIsStop(true);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              onClick={() => {
                setIsStop(false);
              }}
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
