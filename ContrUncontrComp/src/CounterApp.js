import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import Increment from './Increment';
import Decrement from './Decrement';


export default function App() {

  const [count, setCount] = React.useState(0);

  function updatecount() {
    setcount(count + 1);
  
    useEffect (() => {
      document.title = `You clicked ${count} times`;
    });
    console.log(count);
  }
  return (
    <div>
      <h1>Welcome to the world of Counters</h1>

      <h1>Button Clicked {count} times</h1>
      <button onClick={updatecount}>Click Me</button>


     {/* <h2>"Incremental Counter"</h2>
   <Increment/>
    
    <h2>"Decremental Counter"</h2>
    <Decrement/> */}
    </div>
  )
}

