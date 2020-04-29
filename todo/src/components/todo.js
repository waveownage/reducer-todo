import React, { useState, useReducer } from "react";
import { initialState, itemReducer } from "../reducers/reducer";

console.log(initialState);
console.log(itemReducer);

const Item = () => {
  const [newItemText, setNewItemText] = useState("");
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  clearCompleted = e => {
    e.preventDefault();
    setState({
      items: state.items.filter(item => !item.completed)
    });
  };

  return (
    <div>
      {!state.completed ? (
        <h1>
          {state.item}{" "}
          <button
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="item-input"
            type="text"
            name="newItemText"
            value={newItemText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_ITEM", payload: newItemText });
              setNewItemText("");
            }}
          >
            Update Item
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
