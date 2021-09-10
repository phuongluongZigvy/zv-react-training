import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpend, setIsOpend] = useState(false);
  const handleClick = () => {
    setIsOpend(false);
    console.log("hi");
  };
  return (
    <div className="App">
      <h1>TRANING2 TASK 1+2</h1>
      {isOpend ? (
        <Modal handleClick={handleClick}>
          <h2>Wellcome to modal ^^</h2>
        </Modal>
      ) : (
        <button
          onClick={() => {
            setIsOpend(true);
          }}
        >
          Open model
        </button>
      )}
    </div>
  );
}

export default App;
