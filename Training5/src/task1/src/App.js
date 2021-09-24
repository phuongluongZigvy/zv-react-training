import { useEffect} from "react";
import "./App.css";
import Filter from "./components/Filter";
import Todo from "./components/Todo";
import TodoCreate from "./components/TodoCreate";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./api/index";
import {
  DeleteTodo,
  GetTodos,
  OpenFormEdit,
  SetCompletedTodo,
} from "./actions/todo";
import TodoEdit from "./components/TodoEdit";

function App() {
  const dispatch = useDispatch();
  const listTodos = useSelector((state) => state.todo.renderList);

  useEffect(() => {
    fetchTodos().then((newList) => {
      const action = GetTodos(newList);
      dispatch(action);
    });
  }, [dispatch]);

  function handleCompletedTodo(todo) {
    console.log("setcompleted", todo.id);
    const action = SetCompletedTodo(todo);
    dispatch(action);
  }

  function handleDeleteTodo(todo) {
    console.log("delete todo", todo);
    const action = DeleteTodo(todo);
    dispatch(action);
  }

  function handleEditTodo(todo) {
    console.log("edit todo", todo);
    const action = OpenFormEdit(todo);
    dispatch(action);
  }

  return (
    <div className="App">
      <h1>TRAINING 5 TASK 1</h1>
      <TodoCreate />
      <Filter />
      {listTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            handleClick={() => handleCompletedTodo(todo)}
            handleDelete={() => handleDeleteTodo(todo)}
            handleEdit={() => handleEditTodo(todo)}
          />
        );
      })}
      <TodoEdit />
    </div>
  );
}

export default App;
