import React from "react";
import "./TodoItem.css";
import { toggleTask } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateTask } from "../../redux/action";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [update, setupdate] = useState(false);
    const [change, setchange] = useState("");
    const handleClose = () => {
        setupdate(!update);
    };
    const handleUpdate = () => {
        return (
            dispatch(
                updateTask({
                    id: todo.id,
                    task: change,
                    isDone: todo.isDone,
                })
            ),
            setupdate(!update)
        );
    };

    return (
        <>
            {update ? (
                <div className="todo">
                    <div className="search">
                        <input
                            name="name"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={(e) => setchange(e.target.value)}
                        />
                        <label htmlFor="name" className="labelName">
                            <span className="contentName">Add New Todo</span>
                        </label>
                    </div>
                    <button onClick={handleUpdate}>UpdateTodo</button>
                    <button onClick={handleClose}>cancel</button>
                </div>
            ) : (
                <div className="todo">
                    <h2>{todo.task}</h2>
                    <div>
                        <button
                            onClick={() =>
                                dispatch(toggleTask({ id: todo.id }))
                            }
                        >
                            {todo.isDone ? "undo" : "done"}
                        </button>
                        <button onClick={handleClose}>Update</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoItem;
