import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


//showing object from file
console.log(notes)
function entryNotes(oneNote) {
  return(
   <Note title={oneNote.title} content={oneNote.content} key={oneNote.key}></Note>
  )
}


function App() {
  return (
    <div>
      <Header />
      {/* <Note content="" title="" /> */}
      {
  notes.map(entryNotes)
}
      <Footer />
    </div>
  );
}
export default App;
