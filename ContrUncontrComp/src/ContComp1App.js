import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = React.useState("");
//   const [passwd, setPasswd] = React.useState("");

  function updateChange(event) {
    const capsName = (event.target.value).toUpperCase();
    setName(capsName) 
    console.log(event.target.name)
  }
 
  return (
    <div>
      <form>
        <label>First name</label>
        <input type="text"  name="firstname" onChange={updateChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={updateChange} />
      </form>
    </div>
  );
}

export default App;
