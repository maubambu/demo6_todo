import { combineReducers } from 'redux';

import { TodosReducer } from './TodosReducer';
import { FilterReducer } from './FilterReducer';


export const AppReducer = combineReducers({
    todosReducer: TodosReducer,
    filterReducer: FilterReducer
});