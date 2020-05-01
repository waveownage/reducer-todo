const initialState = {
    todoItems: [
      {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589,
      },
      {
        item: "Learn about reducers",
        completed: false,
        id: 3892987587,
      }
    ],
  };
  const itemReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todoItems: [
            ...state.todoItems,
            {
              item: action.payload,
              id: Date.now(),
              completed: false,
            },
          ],
        };
      case "TOGGLE_COMPLETE":
        return {
          ...state,
          todoItems: state.todoItems.map(item => {
            if (item.id === action.payload) {
              return { ...item, completed: !item.completed };
            } else {
              return item;
            }
          }),
        };
  
      case "CLEAR_COMPLETE":
        return {
          ...state,
          todoItems: state.todoItems.filter(item => !item.completed),
        };
  
      default:
        return state;
    }
  };
  
  export { initialState, itemReducer };

  