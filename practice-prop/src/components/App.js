import React from "react";
import Entry from "./Entry";
//import array of info
import emojipedia from "../emojipedia";
function App() {
  console.log(emojipedia);
  console.log(emojipedia[0])
  function createEntry(emoji){
    return(
      <Entry image={emoji.emoji} name={emoji.name} meaning={emoji.meaning} />
    )
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry
        image = {emojipedia[0].emoji}
        name= {emojipedia[0].name}
        meaning={emojipedia[0].meaning}
         /> */}
        { emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
