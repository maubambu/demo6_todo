import { createStore, applyMiddleware, combineReducers } from 'redux';
import { AppReducer } from './../reducers/AppReducer';
import logger from 'redux-logger'
import { TodosReducer } from '../reducers/TodosReducer';
import { FilterReducer } from '../reducers/FilterReducer';

export const createAppStore = () => {
    const store = createStore(
        combineReducers(
            {
                todos: TodosReducer,
                filter: FilterReducer
            }), applyMiddleware(logger));
    return store;
}