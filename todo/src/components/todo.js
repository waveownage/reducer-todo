import React, { useReducer, useState } from "react";
import { itemReducer, initialState } from "../reducers/reducer";
import TodoList from "./todoList";

function ToDo() {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  const [item, setItem] = useState("");

  const handleChanges = (e) => {
    setItem(e.target.value);
  };

  const submitItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: item });
    setItem("");
  };



  const toggleComplete = (ID) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: ID });
  };

  return (
    <section className="inputForm">
      <form onSubmit={submitItem}>
        <input type="text" name="item" value={item} onChange={handleChanges} />
        <button className="addItem">Add</button>
      </form>
      <TodoList
        item={state.todoItems}
        dispatch={dispatch}
        toggle={toggleComplete}
      />
    </section>
  );
}

export default ToDo;