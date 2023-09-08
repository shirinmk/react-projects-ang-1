import React from "react";
import Avatar from "./Avetar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
       <Avatar img={props.img} />
      </div>
      <div className="bottom">
      <Detail det1={props.tel} det2={props.email} />
      
      </div>
    </div>
  );
}

export default Card;