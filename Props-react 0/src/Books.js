//import { useState } from "react";

function Books({ title, author }) {

    return (
        <>

            <h1>{title}</h1>
            <h3>{author}</h3>
            <button type="button" onClick={clickhandler}>Click Me!</button>
        </>

    );
}


function clickhandler() {

    alert("Button Clicked");
}

export default Books;