// import { updateTask, toggleTask, addTask } from "./action";
import InnitialState from "./states";

const reducer = (state = InnitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TASK":
            return {
                todos: [...state.todos, payload],
            };
        case "UPDATE_TASK":
            return {
                todos: state.todos.map((todo) =>
                    todo.id === payload.id
                        ? { ...todo, task: payload.task }
                        : todo
                ),
            };
        case "TOGGLE_TASK":
            return {
                todos: state.todos.map((todo) =>
                    todo.id === payload.id
                        ? { ...todo, isDone: !todo.isDone }
                        : todo
                ),
            };
        default:
            return state;
    }
};
export default reducer;
