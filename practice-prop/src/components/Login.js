import React from "react";

function Login(){
    return(
        <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form> 
    )
}

export default Login