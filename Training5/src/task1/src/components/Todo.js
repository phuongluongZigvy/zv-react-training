import React from "react";
import styled from "styled-components";

const TodoItem = styled.div`
  color: white;
  margin: 0.5rem auto;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration-line: ${(props) =>
    props.completed ? "line-through" : "none"};
  background-color: ${(props) => (props.completed ? "grey" : "lightseagreen")};
  width: 50%;
  & p {
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 90%;
  }
  & input {
    width: 1.5rem;
    height: 1.5rem;
    border: 3px solid lightsalmon;
    margin-left: 0.5rem;
    background-color: green;
    cursor: pointer
  }
  & i {
    margin: 0.5rem;
    justify-self: flex-end;
    font-size: 1.3rem;
    cursor: pointer
  }
`;

export default function Todo(props) {
  return (
    <TodoItem completed={props.completed}>
      <input type="checkbox" value={props.completed} onChange={props.handleClick}/>
      <p>{props.name}</p>
      <i className="fas fa-trash-alt" onClick={props.handleDelete}></i>
      <i className="fas fa-edit" onClick={props.handleEdit}></i>
    </TodoItem>
  );
}
