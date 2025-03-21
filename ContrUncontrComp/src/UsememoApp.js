import React, { useMemo } from 'react'

function App() {
    const [add,setAdd] = React.useState(0);
    const [sub,setSub] = React.useState(100);
  const multiplication = useMemo(  function multiply(){
        console.log("Multiply");
        return add*10;
    },[add])
  return (
    <div>
        <h1>Learning Use memoHook</h1>
        <h1>{multiplication}</h1>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <h1>{add}</h1>
        <button onClick={() => setSub(sub-1)}>Subtraction</button>
        <h1>{sub}</h1>
        
      
    </div>
  )
}

export default App
