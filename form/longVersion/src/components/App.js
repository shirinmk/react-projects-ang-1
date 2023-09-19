import React, { useState } from "react";

function App() {
    // const [heading,setHeading] = useState('user')
    const [fName, setFname] = useState('')
    const [lName, setlname] = useState('')

    
    function updateFname(event){
   
            console.log('clickfn');
            const firstName = event.target.value
            setFname( firstName)
          
     
    }
    function updateLname(event){
       const lastName = event.target.value
       setlname(lastName)
    }
  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateFname} value={fName}/>
        <input name="lName" placeholder="Last Name" onChange={updateLname} value={lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
