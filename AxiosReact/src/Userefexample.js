import React, { useState } from "react";
import "./App.css";
import { useRef } from "react";

export default function Userefexample() {
  const refElement = useRef("");
  const[name,setName] = useState('Praveen');

  console.log(refElement);
  function Reset()
  {
    setName('');
    refElement.current.focus();
    
  }
  return (
    <>
      <h1>Learning Useref</h1>
      
      <input ref ={refElement} type ="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name here"/>
      <button onClick={Reset}>Reset</button>
    </>
  );
}
