import React from "react";
import { book } from "./book";
import Books from "./Books";

function BookList(props) {
    console.log(props);
    return (
      <>
  
        <Books title={book[0].title} author={book[0].author} />
        <Books title={book[1].title} author={book[1].author} />
        
        <Books title={firstbook.title} author={firstbook.author} />
        <Books title={secondbook.title} author={secondbook.author} /> 
        {/* <Books title={title} author={author} />
        <Books title='Gandagudi' author='jay' />
        <Books title='Namma Kannada' author='kaykini' />
        <p>This book is awasome</p> */}
      </>
    );
  }
//import React, { useState } from "react";
//import ReactDOM from "react-dom/client";


  export default App;