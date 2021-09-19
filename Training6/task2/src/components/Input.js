import React, { useState } from "react";
import styled from "styled-components";
import { AddTask } from "../actions/task";
import Button from "./Button";
import { useDispatch } from "react-redux";

const Container = styled.form`
  width: 70%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
    width: 90%;
    background-color: lightpink;
    font-size: 1.5rem;
  }
`;

export default function Input(props) {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const randomNumber = () => {
      return 1000 + Math.trunc(Math.random() * 9000);
    };
    const newId = randomNumber();
    const action = AddTask({
      id: `mytodo${newId}`,
      content: task,
      state: "draft",
    });
    dispatch(action);
    setTask("");
  }
  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        placeholder="Text Input"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <Button type="submit" text="+Task"></Button>
    </Container>
  );
}
