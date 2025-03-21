import React from "react";
import { useState } from "react";

function Child() {
  const [name, setName] = useState("");
  function updateChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setName(e.target.value);
  }
  return (
    <div>
      <form className="Child" onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={updateChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Child;
