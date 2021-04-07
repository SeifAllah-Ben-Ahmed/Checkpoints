export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const addTask = (payload) => {
    return {
        type: "ADD_TASK",
        payload,
    };
};

export const updateTask = (payload) => {
    return {
        type: "UPDATE_TASK",
        payload,
    };
};
export const toggleTask = (payload) => {
    return {
        type: "TOGGLE_TASK",
        payload,
    };
};
