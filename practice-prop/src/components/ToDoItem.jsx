import React from "react";
import { useState } from "react";

function ToDoItem(props) {
  const [listChange, setList] = useState(false);
  function updateList(event) {
    console.log("list clicked");
    setList((prev) => {
      return !prev;
    });
  }
  return (
    <li
      onClick={updateList}
      style={
       {
        textDecoration : listChange ? "line-through" : "none"
       }
      }
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
