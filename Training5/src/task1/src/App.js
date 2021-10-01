import { useCallback, useEffect, useMemo, useState} from "react";
import "./App.css";
import Filter from "./components/Filter";
import Todo from "./components/Todo";
import TodoCreate from "./components/TodoCreate";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./api/index";
import {
  deleteTodo,
  getTodos,
  openFormEdit,
  setCompletedTodo,
} from "./actions/todo";
import TodoEdit from "./components/TodoEdit";


function App() {
  const dispatch = useDispatch();
  const listTodos = useSelector((state) => state.todo.todos);
  const filter = useSelector((state) => state.todo.isLoadCompleted);
  const searchValue = useSelector((state) => state.todo.searchValue);
  const [listTodosRender, setListTodosRender] = useState(listTodos);

  useMemo(() => {
    fetchTodos().then((newList) => {
      const action = getTodos(newList);
      dispatch(action);
    });
  }, [dispatch]);

  useEffect(() => {
    let newList = listTodos;
    if (filter !== null) {
      newList = listTodos.filter((todo) => todo.completed === filter);
    }
    if (searchValue) {
      newList = newList.filter((todo) => todo.name.includes(searchValue));
    }
    setListTodosRender(newList);
  }, [filter, listTodos, searchValue]);

  const handleCompletedTodo = useCallback(
    (todo) => {
      const action = setCompletedTodo(todo.id);
      dispatch(action);
    },
    [dispatch]
  );

  const handleDeleteTodo = useCallback(
    (todo) => {
      const action = deleteTodo(todo.id);
      dispatch(action);
    },
    [dispatch]
  );

  const handleEditTodo = useCallback(
    (todo) => {
      const action = openFormEdit(todo.id);
      dispatch(action);
    },
    [dispatch]
  );

  return (
    <div className="App">
      <h1>TRAINING 5 TASK 1</h1>
      <TodoCreate/>
      <Filter />
      {listTodosRender.map((todo) => {
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
