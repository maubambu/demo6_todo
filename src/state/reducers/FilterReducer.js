import { SELECT_FILTER } from './../actions/FilterActions';
const initialState = {
    selectedFilter: ""
}

export const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_FILTER:
            return {
                ...state,
                selectedFilter: action.text
            }
        default:
            return state;
    }
}