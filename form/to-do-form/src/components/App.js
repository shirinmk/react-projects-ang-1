import React, { useState } from "react";

function App() {
  const [listData, setList] = useState("");
  // crwate array to keep track of items
  const [items, setItems] = useState([]);

  function updateForm(event) {
    const newValue = event.target.value;
    console.log(newValue);
    setList(newValue);
  }
  function updateList() {
    setItems((prevItem) => {
      return [...prevItem, listData];
    });
    setList("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateForm} value={listData} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>{items}</li> */}
          {items.map((toDoItem) => {
            return <li>{toDoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
