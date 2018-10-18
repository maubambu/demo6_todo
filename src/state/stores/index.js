import { createStore } from 'redux';

//Import reducers

import { AppReducer } from './../reducers/App';

export const createAppStore = () => {
    const store = createStore(AppReducer, []);
    return store;
};