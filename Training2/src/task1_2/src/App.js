import "./App.css";
import CloseButton from "./CloseButton";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isClosed, setIsClosed] = useState(false);
  const handleClick = () => {
    setIsClosed(true);
    console.log("hi", isClosed);
  };
  return (
    <div className="App">
      <h1>TRANING2 TASK 1+2</h1>
      {isClosed === false ? (
        <Modal>
          <h2>Wellcome to modal ^^</h2>
          <CloseButton onButtonClick={handleClick} />
        </Modal>
      ) : (
        <button
          onClick={() => {
            setIsClosed(false);
          }}
        >
          Open model
        </button>
      )}
    </div>
  );
}

export default App;
