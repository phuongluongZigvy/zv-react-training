import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const getKey = (e) => {
      var name = e.key;
      alert(`Key pressed: ${name}`);
    };
    window.addEventListener("keypress", getKey);
    return () => {
      window.removeEventListener("keypress", getKey);
    };
  }, [isOpen]);

  return (
    <div className="App">
      <h1>TRAINING 3 TASKS</h1>
      {isOpen === false ? (
        <button onClick={handleClick}>Open modal</button>
      ) : (
        <button onClick={handleClick}>Close Modal</button>
      )}
      {isOpen && <Modal />}
    </div>
  );
}

export default App;
