import React, { useState } from 'react';

const Increment = () => {
const [counter,setCounter]= useState(0);
  const ClickHandler=()=>{
    setCounter(counter+1);
  }
  return (
    <div>
    
    {counter}

    <br/>
    <button onClick={ClickHandler}>Inc Counter</button>
    </div>
  );
}

export default Increment
