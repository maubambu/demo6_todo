const initialState = {
    selectedFilter: "all"
};

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FILTER":
            return {
                ...state,
                selectedFilter: action.filter
            }
        default:
            return state;
    }
}

export default FilterReducer;