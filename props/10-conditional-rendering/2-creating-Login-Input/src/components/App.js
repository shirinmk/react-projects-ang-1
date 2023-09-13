import React from "react";
import Login from "./Login";

let isLoggedIn = false;
function renderingConditional() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
     <Login />
    );
  }
}

function App() {
  return <div className="container">{renderingConditional()}</div>;
}

export default App;
