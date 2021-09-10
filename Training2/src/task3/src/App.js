import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [stateCountDown, setStateCountDown] = useState({
    valueCountDown: 0,
    isStop: true,
  });
  const [startCountDown, setStartCountDown] = useState(false);
  const [renderedNumber, setRenderNumber] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    let counter = stateCountDown.valueCountDown;
    const interval = setInterval(() => {
      counter--;
      if (counter < 0 || stateCountDown.isStop) return clearInterval(interval);
      setRenderNumber(counter);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [stateCountDown]);

  function handleClick(value) {
    const typeOfValue = typeof value;
    console.log(typeOfValue);
    if (value.length === 0) {
      alert("Please input a number");
    } else if (isNaN(value) === false) {
      if (value <= 0) alert("Number must be greater than 0");
      else {
        setRenderNumber(value);
        setValue("");
        setStartCountDown(true);
        setStateCountDown({
          ...stateCountDown,
          valueCountDown: value,
          isStop: false,
        });
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
          <h3>{renderedNumber}</h3>
          {!stateCountDown.isStop ? (
            <button
              onClick={() => {
                setStateCountDown({ ...stateCountDown, isStop: true });
              }}
            >
              Stop
            </button>
          ) : (
            <button
              onClick={() => {
                setStateCountDown({
                  ...stateCountDown,
                  isStop: false,
                  valueCountDown: renderedNumber,
                });
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
