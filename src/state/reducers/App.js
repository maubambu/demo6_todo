// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

// IMPORT REDUCERS

import { TodoReducer } from './Todo';
// import { FilterReducer } from './Filter';

// EXPORT REDUCER

export const AppReducer = combineReducers({
    todoReducer: TodoReducer,
    // filterReducer: FilterReducer
});