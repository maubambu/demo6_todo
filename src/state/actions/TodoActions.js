export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO_INPUT = "UPDATE_TODO_INPUT";

// ACTIONS GENERATORS

const AddTodo = todo => ({
    type: ADD_TODO,
    todo
});

const RemoveTodo = id => ({
    type: REMOVE_TODO,
    id
});

const UpdateTodoInput = input => ({
    type: UPDATE_TODO_INPUT,
    input
});



// EXPORT ACTIONS

export { AddTodo as addTodo, RemoveTodo as removeTodo, UpdateTodoInput as updateTodoInput };