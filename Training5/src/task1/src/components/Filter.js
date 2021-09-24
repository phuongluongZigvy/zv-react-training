import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FilterAll, FilterCompleted, FilterUnCompleted } from "../actions/todo";

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 2.5rem auto;
  justify-content: center;
`;

const FilterItem = styled.p`
  color: lightseagreen;
  text-align: center;
  padding: 0 0.5rem;
  position: relative;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0 1rem;

  &::before {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color: lightseagreen;
  }

  &:hover::before {
    display: block;
  }
`;

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);
  console.log("filter", filter);

  function handleAllClick(){
    const action = FilterAll();
    dispatch(action);
  }

  function handleCompletedClick(){
    const action = FilterCompleted();
    dispatch(action);
  }

  function handleUncompletedClick(){
    const action = FilterUnCompleted();
    dispatch(action);
  }


  return (
    <FilterContainer>
      <FilterItem active={filter === "all" ? true : false} onClick={handleAllClick}>All</FilterItem>
      <FilterItem active={filter === "completed" ? true : false} onClick={handleCompletedClick}>
        Completed
      </FilterItem>
      <FilterItem active={filter === "uncompleted" ? true : false}onClick={handleUncompletedClick}>
        UnCompleted
      </FilterItem>
    </FilterContainer>
  );
}
