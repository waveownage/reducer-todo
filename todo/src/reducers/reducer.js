export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  };

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EDITING";
            return {
                ...state,
                editing: !state.editing

            };
        case "UPDATE_ITEM":
            return {
                ...state,
                item: action.payload,
                editing: false
            };
            default:
                return state;
    }
}