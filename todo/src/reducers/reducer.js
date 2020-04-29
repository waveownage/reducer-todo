export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: 123,
  };

export const itemReducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            return {
                ...state,
                item: action.payload,
                id: Date.now(),
                completed: false,

            };
        case "TOOGLE_ITEM":
            return {
                ...state,
                state :state.map((item) => {
                    if(item.id === action.payload) {
                        return{...item, completed: !item.completed}
                    }
                })
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                state: state.filter((item) => !item.completed),
            };
            default:
                return state;
        
    }
};