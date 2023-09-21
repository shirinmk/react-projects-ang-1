import React from "react";
import { useState } from "react";

function CreateArea(props) {
  //1- create object to hold 
  const [note,setNote] = useState({
    title:"",
    content: ""
  })
function handleChange(event){
  const {name, value} = event.target;
  setNote(prevNote =>{
    return {
      ...prevNote,
      [name]:value
    }
  })
}

function submitNote(event){
  props.onAdd(note);
//prevent refreshing page by clicking add
event.preventDefault()

}
  return (
    <div>
      <form>
      {/* //2-update change for both */}
        <input name="title" placeholder="Title"  value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
