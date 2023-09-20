import React from "react";
import { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick(event) {
    console.log("list clicked");
    setIsDone((prev) => {
      return !prev;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: isDone ? "line-through" : "none",
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
