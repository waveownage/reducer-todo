import React from "react";

const TodoList = props => {
    const clearCompleted = e => {
      e.preventDefault();
      props.dispatch({ type: "CLEAR_COMPLETE" });
    };
  
    return (
      <div className="todo-container">
        {props.item.map(item => (
          <div className="todo-item">
            <li
              onClick={() => props.toggle(item.id)}
              className={`todo${item.completed ? " done" : ""}`}
              key={item.id}
            >
              {item.item}
            </li>
          </div>
        ))}
        <button className="clear-button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
  export default TodoList;
