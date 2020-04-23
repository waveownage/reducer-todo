import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";

const Item = () => {
  const [newItemText, setNewItemText] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.item}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
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
              dispatch({ type: "UPDATE_Item", payload: newItemText });
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
