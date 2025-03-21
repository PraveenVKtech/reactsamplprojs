import React from 'react'
import { useState } from 'react'


function App() {
    const [name, setName] = useState('');
    const [passwd, setPasswd] = useState('');

    function handleChange(e){
        
        console.log(e);
        const capName = e.target.value.toUpperCase();
        setName(capName);
        console.log(e.target.value);
    }

    function handlePasswd(e){
        setPasswd(e.target.value);
        console.log(e);
        console.log(e.target.value);
    }
  return (
    <div>
      <form className='App'>
        <label>Enter First Name:</label>
        <input type="text" value={name}  onChange={handleChange}/>
        <br/>
        <label>Enter Passwd:</label>
        <input type="text" value={passwd}  onChange={handlePasswd}/>
      </form>
    </div>
  )
}

export default App
