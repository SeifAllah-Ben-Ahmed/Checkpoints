import React from "react";
import "./AddTodo.css";
import { useState } from "react";
import { addTask } from "../../redux/action";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [change, setchange] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="add__Section">
            <h1>Todo Checkpoint</h1>
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
            <button
                onClick={() =>
                    dispatch(
                        addTask({
                            id: Math.random(),
                            task: change,
                            isDone: false,
                        })
                    )
                }
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
