import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeFormEdit, editTodo } from "../actions/todo";

const EditForm = styled.form`
  width: 40%;
  height: 40%;
  position: fixed;
  z-index: 1;
  top: 30%;
  left: 30%;
  display: ${(props) => (props.isDiplay ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid lightseagreen;
  & h3 {
    width: 100%;
    color: lightseagreen;
    font-size: 1.5rem;
    text-align: center;
  }

  & input {
    width: 95%;
    outline: none;
    border: none;
    padding: 0.5rem;
    margin: 0;
    font-size: 1.3rem;
    color: lightseagreen;
  }
  & button {
    background-color: lightseagreen;
    color: white;
    border: none;
    padding: 0.1rem auto;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0 1rem;
    width: 5rem;
    height: 3rem;
    text-align: center;
  }
`;
export default function TodoEdit() {
  const getCurrentEditTodoId = useSelector((state) => state.todo);
  const isDisplay =  useSelector((state) => state.todo.isOpenForm);
  const [todoValue, setTodoValue] = useState('');
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const todo = getCurrentEditTodoId.todos.find(todo=>(todo.id===getCurrentEditTodoId.editTodoId));
    if (todo) setTodoValue(todo.name);
  },[getCurrentEditTodoId])

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: getCurrentEditTodoId.id,
      name: todoValue,
    };
    const action = editTodo(newTodo);
    dispatch(action);
  }

  function handleCancle(e) {
    const action = closeFormEdit();
    dispatch(action);
  }

  return (
    <EditForm onSubmit={handleSubmit} isDiplay={isDisplay}>
      <h3>Update your todo</h3>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button type="text" onClick={handleCancle}>Cancel</button>
      <button type="submit">Save</button>
    </EditForm>
  );
}
