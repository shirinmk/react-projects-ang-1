// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from '../src/practice';
import animals from "./data";
console.log(cars)
console.log(animals)
function createName(element){
  console.log(element.name)
}
{animals.map(createName)}
console.log(animals.name)
// 1
const [honda,tesla] = cars
console.log(honda)
console.log(tesla)
const {speedStats:{topSpeed : hondaTopSpeed,zeroToSixty}} = honda
console.log("speed of honda")
console.log(hondaTopSpeed)
const {speedStats:{topSpeed : teslaTopSpeed}} = tesla
const {coloursByPopularity:[hondaTopColour]} = honda
const {coloursByPopularity:[teslaTopColour,teslaSecondColur]} = tesla
console.log(teslaSecondColur)
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
