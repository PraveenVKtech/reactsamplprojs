import { useRef } from 'react'

const App = () => {
    // COntrolled com controlled by react like usesate
    // Uncontrolled by DOM by useref
    const refObject = useRef()
    console.log(refObject)

    function handleSubmit(e){
        e.preventDefault()
        console.log(refObject.current.value)
    }   
  return (
    <div>
        <h1>useRef</h1>
      <form  className ='App' onSubmit={handleSubmit}>
      <label>Enter Name:</label>
      <input type="text" />
      <br/>
      <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
