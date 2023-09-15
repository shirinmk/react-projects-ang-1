import React, { useState } from "react";

function App() {

const [heading,setHeading] = useState("HelloShirin")
const [mouseOver, setMouseOver] = useState(false)

function handeling(){
    setHeading("submited")
}
function handlingMouseOver(){
setMouseOver(true)
}
function handlingMouseOut(){
    setMouseOver(false)
}
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button  onClick={handeling} style={{backgroundColor: mouseOver ? "black" : "white"}} onMouseOver={handlingMouseOver} onMouseOut={handlingMouseOut}>Submit</button>
    </div>
  );
}


export default App;
