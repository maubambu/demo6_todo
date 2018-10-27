export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


const AddTodo = (text) => ({
    type: ADD_TODO,
    text
});

const ToggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export { AddTodo as addTodo, ToggleTodo as toggleTodo };