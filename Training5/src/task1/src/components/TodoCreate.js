import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, addNewTodoSuccess, searchTodo } from "../actions/todo";
import { usePrevious } from "./usePrevious";

const TodoForm = styled.form`
  width: 50%;
  margin: 2rem auto;
  display: flex;

  & input {
    width: 90%;
    outline: none;
    border: 3px solid lightseagreen;
    padding: 0.5rem;
    font-size: 1.3rem;
    color: lightseagreen;
  }
  & button {
    background-color: lightseagreen;
    color: white;
    border: 3px solid lightseagreen;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;
export default function TodoCreate() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };
  const isLoading = useSelector((state) => state.todo.isLoading);
  const preIsLoading = usePrevious(isLoading) || false;
  console.log("current", isLoading, "prevalue", preIsLoading);

  useEffect(() => {
    if (isLoading !== preIsLoading) {
      dispatch(addNewTodoSuccess());
    }
  }, [isLoading, preIsLoading, dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todoValue);
    const newId = randomNumber();
    const newTodo = {
      id: `M9gdBMpsvvWrWvgp${newId}`,
      name: todoValue,
      completed: false,
    };
    const action = addNewTodo(newTodo);
    dispatch(action);
  }

  function handleInputValue(e) {
    setTodoValue(e.target.value);
    const action = searchTodo(e.target.value);
    dispatch(action);
  }

  return (
    <TodoForm onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputValue}
        value={isLoading === preIsLoading ? todoValue : ""}
        placeholder="Write new todo here"
      />
      <button type="submit">Create</button>
    </TodoForm>
  );
}
