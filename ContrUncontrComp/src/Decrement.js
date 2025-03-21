import React, { useState } from 'react';

function Decrement() {
  const [counter,setCounter]= useState(100);
  const ClickHandler=()=>{

    setCounter(counter-1);
  }
  return (
    <div>
    
    {counter}

    <br/>
    <button onClick={ClickHandler}>Dec Counter</button>
    </div>
  );
}

export default Decrement;