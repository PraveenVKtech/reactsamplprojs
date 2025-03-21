import {React,memo} from 'react'


 function ChildA() {
    console.log("Child Component");
  return (
    <div>
      
    </div>
  )
}
export default memo(ChildA);
