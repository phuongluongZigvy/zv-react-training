import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (isOpen === true) {
      const modal = document.querySelector(".Modal");
      console.log(modal);
      modal.addEventListener('keypress', (e) => {
        var name = e.key;
        alert(`Key pressed: ${name}`);
      });
    }
  }, [isOpen]);

  return (
    <div className="App">
      <h1>TRAINING 3 TASKS</h1>
      {isOpen===false?<button onClick={handleClick}>Open modal</button>:<button onClick={handleClick}>Close Modal</button>}
      {isOpen && <Modal />}
    </div>
  );
}

export default App;
