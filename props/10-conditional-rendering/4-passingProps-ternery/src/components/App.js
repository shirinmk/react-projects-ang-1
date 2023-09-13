import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
    {/* passing variable as a props to my custome html element  */}
     <Form isRegistered= {userIsRegistered}/>
    </div>
  );
}

export default App;
