import React from "react";
import ReactDOM from "react-dom";

//put js inside in html use {} only experetion is evaluated to value
//but we can't put statemnet like if inside {}
const num = 7
const fname = 'shirin'
const lname = "kal"
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">welcome {fname}  {lname}</h1>
    <h2>My favourite Foods</h2>
    <ul>
      <li>Fish</li>
      <li>Kabab</li>
      <li>Ghormeh sabzi</li>
    </ul>
    <h5>Shirin lucky number is {num} and random num {Math.random()}</h5>
    <h4>Copyright {currentYear}</h4>
  </div>,
  document.getElementById("root")
);
