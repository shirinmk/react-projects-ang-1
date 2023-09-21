import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

  const [notes,setNotes] = useState([])

  function addNote(note){
    console.log(note)
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

 function deleteNote(id){
  console.log("delte")
  setNotes((preNotes) => {
    return preNotes.filter((noteItem, index) => {
      return index !== id
    })
  })
 }


  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}/>
      {notes.map((item,index) =>{
       return <Note title={item.title} content={item.content} onDelete={deleteNote} key={index} id={index} />
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
