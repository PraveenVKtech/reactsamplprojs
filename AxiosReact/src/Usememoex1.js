import React, {useMemo, useState } from 'react'

export default function Usememoex1() {

  
const[add,setAdd] =useState(0);
console.log(add);
const[minus,setMinus] = useState(100);
console.log(minus);

const multiplication = useMemo(function multiply(){
  console.log("Is multiply calling ?");
  return add*10;

},[add])
  return (
    <div>
      <h1>Learning Usememo</h1>
      

      <button onClick ={() => setAdd(add+1)}>Addition</button>
      
      {add}
      
      <button onClick ={() => setMinus(minus-1)}>Substraction </button>
      {minus}
      <br/>
  
    {multiplication }
    </div>
  )
}
