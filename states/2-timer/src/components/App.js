import React, { useState } from "react";

function App() {
    setInterval(changeTimeFunction, 1000);
    const time = new Date().toLocaleTimeString();
  const [timeShow, setTime] = useState(time);
  function changeTimeFunction() {
    // console.log("clikced")
    // i have to give new time
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
 

  return (
    <div className="container">
      <h1>{timeShow}</h1>
      <button onClick={changeTimeFunction}>Get Time</button>
    </div>
  );
}

export default App;
