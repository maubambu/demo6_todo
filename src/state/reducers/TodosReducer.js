import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from './../actions/TodosActions';

const initialState = {
    list: []
}

export const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                id: state.list.length + 1,
                text: action.text,
                done: false
            }
            return {
                ...state,
                list: state.list.concat(newTodo)
            }
        case CHECK_TODO:
            let arregloTemporal = state.list.slice();
            for (let item of arregloTemporal) {
                if (item.id === action.id) {
                    item.done = action.checked;
                }
            }
            return {
                ...state,
                list: arregloTemporal
            }
        case REMOVE_TODO:
            break;
        
        default:
            return state;
    }
}