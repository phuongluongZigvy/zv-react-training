import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isStop, setIsStop] = useState(true);
  const [startCountDown, setStartCountDown] = useState(false);
  const [valueCountdown, setValueCountdown] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (valueCountdown === 0) setIsStop(true);
  }, [valueCountdown]);

  useEffect(() => {
    if (isStop) return;
    const interval = setInterval(() => {
      setValueCountdown((valueCountdown) => valueCountdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isStop]);

  function handleClick(value) {
    const typeOfValue = typeof value;
    console.log(typeOfValue);
    if (value.length === 0) {
      alert("Please input a number");
    } else if (isNaN(value) === false) {
      if (value <= 0) alert("Number must be greater than 0");
      else {
        setValueCountdown(value);
        setValue("");
        setStartCountDown(true);
        setIsStop(false);
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
          <h3>{valueCountdown}</h3>
          {!isStop || valueCountdown ===0 ? (
            <button
              onClick={() => {
                setIsStop(true);
              }}
            >
              Stop
            </button>
          ) :(
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
