import React from 'react'
import AddOnComp from './AddOnComp';

function Uppcase() {
    //use state code 
    const [text, setText] = React.useState("")

    function upcase() {
      let upperCase = text.toUpperCase()
      setText(upperCase)
    }
    function ConvertToUpper(p) {
      setText(p.target.value);
      console.log(p.target.value)
    }
    function callback(text){
      setText(text)
    }
  return (
    <div>
      {/* <button onClick={upcase}>Convert to Uppercase</button> */}
      <input type="text" onChange={(param) => ConvertToUpper(param)} value={text} />
      
    <h1>Upper case text is : {text.toUpperCase()}</h1>
    <h1>Upper original case text is : {text}</h1>
    <AddOnComp text={text} callback={callback}/>
  
    {/* //<p>Uppercase Text: {upcase}</p> */}
     
    </div>
  )
}

export default Uppcase
