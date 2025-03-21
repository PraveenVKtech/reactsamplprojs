import { useState } from "react";
import MyButton from "./Mybutton";


function SetColur() {
    const [color, setcolor] = useState("red");

    function handleClick() {
        setcolor("Yellow")
    }

    return (
        <>
            <h1> My Fav colur is :{color}</h1>
            {/* <button onClick= {() => setcolor("blue")}> Click me to Change the Color!</button> */}
            <button onClick={handleClick}> Click me to Change the Color!</button>
        </>
    )
}

export default SetColur