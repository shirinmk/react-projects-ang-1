import React from "react";

function Card(props) {
  // console.log(props)
  return (
    <duv>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.alt} />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </duv>
  );
}

export default Card;
