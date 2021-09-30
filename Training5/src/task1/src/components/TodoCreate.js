import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import { addNewTodo, searchTodo } from "../actions/todo";

const TodoForm = styled.form`
width: 50%;
margin: 2rem auto;
display: flex;

    & input{
        width: 90%;
        outline: none;
        border: 3px solid lightseagreen;
        padding: 0.5rem;
        font-size: 1.3rem;
        color: lightseagreen;
    }
    & button{
        background-color:lightseagreen ;
        color: white;
        border: 3px solid lightseagreen;
        padding: 0.5rem;
        cursor: pointer;
        font-size: 1.3rem;
    }
`
export default function TodoCreate() {
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();
    const randomNumber = ()=>{
        return 1000 + Math.trunc(Math.random()*9000);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(todoValue);
        const newId = randomNumber();
        const newTodo = {
            id: `M9gdBMpsvvWrWvgp${newId}`,
            name: todoValue,
            completed: false
        }
        const action = addNewTodo(newTodo);
        dispatch(action);
        e.target.reset();
    }

    function handleInputValue(e) {
        setTodoValue(e.target.value);
        const action = searchTodo(e.target.value);
        dispatch(action);
    }
    
    return (
        <TodoForm onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputValue} placeholder="Write new todo here"/>
            <button type="submit">Create</button>
        </TodoForm>
    )
}
