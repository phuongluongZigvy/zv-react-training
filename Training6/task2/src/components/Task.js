import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
  return (
    <Container>
      {props.text}
      <Button text={props.state}></Button>
    </Container>
  );
}
