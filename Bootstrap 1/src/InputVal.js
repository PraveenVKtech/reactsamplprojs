import React, { useState } from "react";

function InputVal(){
    const [inputval, newChangeval] = useState('Praveen');

    const onchange =(event) =>{
        const newval = event.target.value;
        newChangeval(newval)

    }
    
    return(

        <>
        <div>
            <h1>{inputval}</h1>
        <input type="text" placeholder='Type Somthing Here' onChange={onchange}/>
        <input></input>
        </div>
        </>
    )
    
}

export default InputVal