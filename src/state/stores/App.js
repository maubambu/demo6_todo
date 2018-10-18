import { createStore } from 'redux';
import { AppReducer } from './../reducers/AppReducer';

export const createAppStore = () => {
    const store = createStore(AppReducer, []);
    return store;
}