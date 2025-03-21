import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {

    const [name,setName]=useState("");

    const refElement=useRef("");
console.log(refElement);

function Reset(){
    setName("");
    refElement.current.focus();

   
}
function handleInput(){
    refElement.current.style.color="red";
    refElement.current.style.backgroundColor="yellow";
    refElement.current.value ="praveen"
}
  return (
    <div>
      <h1>Learning Useref</h1>
      {/* /console.log({refelement}); */}
      <button onClick={handleInput}>Handle Input</button>
      <input ref={refElement} type="text" value = {name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App
