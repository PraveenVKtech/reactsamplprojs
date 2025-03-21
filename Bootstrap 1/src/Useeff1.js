import React, { useState } from "react";
import { useEffect } from "react";


function Useeff1(){
const [count,setcount]  = useState(0);

function handleclick()
{
    setcount(count+1);
}

useEffect(() =>{
    console.log('hi');
    },[])
    
    useEffect(() =>{
        console.log('hi');
        },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleclick}>Click Here</button>
        </>

    )
}


export default Useeff1;