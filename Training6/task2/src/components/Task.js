import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { HandleTask, Resubmit } from "../actions/task";

const Container = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightsalmon;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
`;

export default function Task(props) {
  const dispatch = useDispatch();
  const listTask = useSelector((state) => state.task.listTask);
  function handleClick() {
    const task = {
      id: props.id,
      content: props.text,
      state: props.state,
    };
    // manage manually updated
    const state = listTask.find((item) => task.id === item.id).state;
    if (state === "draft") {
      let action = HandleTask(task);
      dispatch(action);
    } else if (state === "error") {
      let action = Resubmit(task);
      dispatch(action);
    }
  }
  return (
    <Container>
      {props.text}
      <Button handleClick={handleClick} text={props.state}></Button>
    </Container>
  );
}
