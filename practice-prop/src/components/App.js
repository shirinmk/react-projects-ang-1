import React from "react";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

function App() {
// 1.define variable for input value 
const [inputText, setInputText] = useState(" ")

function handleChange(event){
  // hold new value 
const newValue = event.target.value
setInputText(newValue)
}

// create array to hold all items 
const [items, setItems] = useState([])

function addItem(){
  // hold of previous item and add new item to it 
    setItems(prev => {
        return[...prev, inputText]
    })
    setInputText("")
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange}  value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {/* to see each item of array we use a map function  */}
        {
            items.map(todoItem => 
           
            <ToDoItem item={todoItem} />
            )
        }
          
        </ul>
      </div>
    </div>
  );
}

export default App;
