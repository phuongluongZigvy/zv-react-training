import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ChangeStatusNetwork } from "./actions/network";
import { Resubmit } from "./actions/task";

const Status = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin: 1rem auto;
  font-size: 1.5rem;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  background-color: ${(props) => (props.online ? "green" : "grey")};
  cursor: pointer;
  height: 3rem;
`;
function App() {
  const dispatch = useDispatch();
  const online = useSelector((state) => state.network.status);
  const listTask = useSelector((state) => state.task.listTask);
  console.log("list", listTask);
  function handleNetwork() {
    const action = ChangeStatusNetwork();
    dispatch(action);
    console.log("status", online);
    const listTaskPending = listTask.filter(
      (task) => task.state === "submitting"
    );
    console.log("tasks pendding", listTaskPending);
    listTaskPending.map((task) => {
      const action2 = Resubmit(task);
      dispatch(action2);
    });
  }
  return (
    <div className="App">
      <Status>
        <h3>Network: </h3>
        <Button online={online} onClick={handleNetwork}>
          {online ? "Online" : "Offline"}
        </Button>
      </Status>
      <Input />
      {listTask.map((task) => (
        <Task
          key={task.id}
          text={task.content}
          state={task.state}
          id={task.id}
        />
      ))}
    </div>
  );
}

export default App;
