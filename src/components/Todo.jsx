import React from "react";
import { useState } from "react";
import { addTodo, removeTodo } from "../assets/Features/todoSlice";
import { useSelector, useDispatch } from "react-redux";
const Todo = () => {

    const todos=useSelector(state=>state.todos)
    console.log(todos)
    return (
    <>
        <h2>Todo List</h2>
    </>  );
}
 
export default Todo;