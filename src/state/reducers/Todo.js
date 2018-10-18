// IMPORT ACTIONS

import { ADD_TODO, REMOVE_TODO, UPDATE_TODO_INPUT } from './../actions/TodoActions';

// INITIALIZE STATE

const initialState = {
    list: [],
    todoInput: "",
};

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                list: state.list.concat(action.todo)
            };
        case REMOVE_TODO:
            console.log('removing todo with ID:', action.id)
            return {
                ...state
            }
        case UPDATE_TODO_INPUT:
            return {
                ...state,
                todoInput: action.input
            }
        default:
            return state;
    }
}