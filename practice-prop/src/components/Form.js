import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered ? null :  <input type="password" placeholder="Confirm Password" />}
     
      <button type="submit">

     {props.isRegistered ?  <p>Login</p>: <p>Register </p>}
      
      </button>
    </form>
  );
}

export default Form;
