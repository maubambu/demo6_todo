import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Import reducers
import TodosReducer from './../reducers/TodosReducer';
import FilterReducer from './../reducers/FilterReducer';

const store = createStore(combineReducers({
    todos: TodosReducer,
    filter: FilterReducer
}), applyMiddleware(logger));


export default store;