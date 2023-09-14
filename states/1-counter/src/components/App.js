//1
import React,{useState} from "react";

function App() {
// 2
const [count, setCout] = useState(0)
console.log(count)

// 5
function increaseFun(){
    console.log("clicked")
    // 6
    setCout(count + 1)
}
function decreaseFun(){
    setCout( count - 1)
}
  return (
    <div className="container">
    {/* 4 */}
    <h1 >{count}</h1>
    {/* 3 */}
    <button onClick={increaseFun}>+</button>
    <button onClick={decreaseFun}>-</button>
  </div>
  );
}

export default App;
