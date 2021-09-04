import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [valueCountDown, setValueCountDown] = useState(0);
  const [isStop, setIsStop] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
      const countdown = setTimeout(() => {
        if (valueCountDown>0 && isStop===false)
        setValueCountDown(valueCountDown - 1);
      }, 1000);
      return ()=>clearTimeout(countdown);
  }, [valueCountDown, isStop]);

  function handleCountdown(number) {
    console.log(number);
    setIsStop(false);
    setValueCountDown(number);
    setValue("");
  }

  function handleClick(value) {
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
      {
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
      }
    </div>
  );
}

export default App;
