import React from "react";

const myArray = ['apple', 'banana', 'orange', 'CustApplwe', 'Mango'];

const Mapfunc = () => {

  return (

    myArray.map((fruit) => {
      return (
        <div>
          {fruit}
        </div>
      )
    }
    )
  )

}
export default Mapfunc;

