import React from "react";


//creating costum function component
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
//1
export default Note;
