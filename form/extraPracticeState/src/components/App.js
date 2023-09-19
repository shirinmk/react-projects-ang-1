import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateInfo(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setContact((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName === 'lName') {
        return {
          lName: newValue,
          fName: prevValue.fName,
          email: prevValue.email
        };
      } else if (inputName === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" value={contact.fName} onChange={updateInfo} />
        <input name="lName" placeholder="Last Name" value={contact.lName} onChange={updateInfo} />
        <input name="email" placeholder="Email" value={contact.email} onChange={updateInfo} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
