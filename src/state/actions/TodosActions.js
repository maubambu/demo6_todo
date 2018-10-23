// Definir constantes de acciones
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHECK_TODO = "CHECK_TODO";

// Definir Action Generators

const AddTodo = text => ({
    type: ADD_TODO,
    text
})

const RemoveTodo = id => ({
    type: REMOVE_TODO,
    id
})

const CheckTodo = (id, checked)=> ({
    type: CHECK_TODO,
    id,
    checked
})



// EXPORT ACTIONS

export { AddTodo, RemoveTodo, CheckTodo };