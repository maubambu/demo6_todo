import { ADD_TODO, TOGGLE_TODO } from './../actions/TodosActions';

const initialState = {
    list: [],
};

const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                list: state.list.concat(
                    {
                        id: state.list.length + 1,
                        text: action.text,
                        done: false
                    }),
            };
        case TOGGLE_TODO:
            let arregloTemporal = state.list.slice();
            let todo = arregloTemporal.find((item) => {
                if (item.id == action.id) {
                    item.done = !item.done;
                    return true;
                }
            });
            arregloTemporal[todo] = todo;
            return {
                ...state,
                list: arregloTemporal
            }
        default:
            return state;
    }
}

export default TodosReducer;