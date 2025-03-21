import React from 'react'
import { useState } from 'react'

function Lowercase() {
    const [text, setText] = useState('');
    const [lowercaseText, setLowercaseText] = useState('');

    const  handleTextChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);

    }
    const handleButtonClick = () => {
        const lowercaseText = text.toLowerCase();
        setLowercaseText(lowercaseText);
        
    }

  return (
    <div>
        <h1>Convert to Lowercase</h1>
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <input type="text" value ={text} onChange={handleTextChange}/>
        <p>Entered Text is:{text}</p>
        <button onClick={handleButtonClick}>Convert to Lowercase</button>
        <p>Lowercase Text: {lowercaseText}</p>



    </div>
  )
}

export default Lowercase
