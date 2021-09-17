import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
import styled from "styled-components";

const Status = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin: 1rem auto;
  font-size: 1.5rem;
`;

function App() {
  const network = true;

  return (
    <div className="App">
      <Status>
        <h3>Network: {network ? "Online" : "Offline"}</h3>
      </Status>
      <Input />
      <Task text="Task 1" state="success" />
      <Task text="Task 1" state="error" />
      <Task text="Task 1" state="submitting" />
      <Task text="Task 1" state="draft" />
      <Task text="Task 1" state="nothings" />
    </div>
  );
}

export default App;
