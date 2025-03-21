import React from "react";
import { useState } from "react";
import './App.css';


function Updowncounter()
{
    const[value1, Setvalue1] = useState(0);
    const[value2, Setvalue2] = useState(value1);
    
    function Increamentval(){
        Setvalue1(value1+1)
    }

    function Decreamentval(){
        Setvalue2(value2-1)
    }

    return(
    <>
    <div> Increment Decrement Counter</div>
    
    {value2}
    <button onClick={Decreamentval}>-</button>
    OOta aayita ?
    <button onClick={Increamentval}>+</button>
    {value1}
    </>
    )
}

export default Updowncounter 