import { useState } from "react";

const MyCounter=(props)=>{
    const [counter,setCounter] = useState(0);
  function Increment()
  {
    setCounter(counter+1);
  }
  const updateParentCounter=()=>{
    props.callback(counter);
  }
    return(
        <div>
            <h1>Hi {props.name}</h1>
            <button onClick={Increment}>Increment</button>
            <p>{counter}</p>
            <button onClick={updateParentCounter}>Update Parent Counter</button>
        </div>
    )
};
export default MyCounter;