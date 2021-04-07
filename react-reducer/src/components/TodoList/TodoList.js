import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { useSelector } from "react-redux";
const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="list">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;
