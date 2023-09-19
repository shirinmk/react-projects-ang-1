import React, { useState } from "react";

function App() {
//    create object 
    const [fullName, setFullname] = useState({
        fname : '',
        lname : ''
    })
   

    
    function updateFullName(event){
   
            console.log('clickfn');
            const newValue= event.target.value
           const inputName = event.target.name
           
           setFullname((prevValue) =>{

            if(inputName === 'fName'){
                return {
                    fname: newValue,
                    lname : prevValue.lname
                }
            }else if(inputName === 'lName'){
                return{
                    fname: prevValue.fname,
                    lname : newValue
                }
            }

           })
     
    }

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname} </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateFullName} value={fullName.fname}/>
        <input name="lName" placeholder="Last Name" onChange={updateFullName} value={fullName.lname} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
