import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Input Form</h1>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
      <p>Entered Text is :{name}</p>
    </form>
  )
}

export default MyForm