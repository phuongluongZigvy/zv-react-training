import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${props=>props.color};
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default function Button(props) {
  return (
    <ButtonContainer
      onClick={props.handleClick}
      color={
        props.text === "draft"
          ? "grey"
          : props.text === "ready"
          ? "blue"
          : props.text === "submitting"
          ? "orange"
          : props.text === "success"
          ? "green"
          : props.text === "error"
          ? "red"
          : "deeppink"
      }
    >
      {props.text}
    </ButtonContainer>
  );
}
