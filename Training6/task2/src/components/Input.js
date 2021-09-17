import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
  return (
    <Container>
      <input type="text" placeholder="Text Input" />
      <Button type="submit" text="+Task"></Button>
    </Container>
  );
}
