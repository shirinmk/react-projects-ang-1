import React from "react";
import ReactDOM from "react-dom";

function Heading  () {
  return(
<h1>My Favorite Foods are </h1>
  )
}


ReactDOM.render(
<div>
<Heading />
<ul>
  <li>Bacon</li>
  <li>egg</li>
  <li>Potato</li>
</ul>



</div>, document.getElementById('root'))