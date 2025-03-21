import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState("Ram")
  function updateCounter() {
    setCount(count + 1)
    console.log("Inside usestate fun"+{count})
  }
  function updateData(){
    setData("Raj")
    // console.log({data})
  }
  useEffect( () => {
    // console.log("Inside useEffect fun"  +{count})
    console.log("useEffect called")
  },[data]
  )

  return (
    <div>
      <h1>Counter App {count}</h1>
      <button onClick={updateCounter}>Increment</button>
      <button onClick={updateData}>Update Data</button>
      
      
    </div>
  )
}

export default App
