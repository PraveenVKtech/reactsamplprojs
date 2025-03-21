import React from "react";
import { book } from "./book";
import Books from "./Books";

function App(props) {
  console.log(props);
  return (
    <>

      <Books title={book[0].title} author={book[0].author} />
      <Books title={book[1].title} author={book[1].author} />

      <Books title={firstbook.title} author={firstbook.author} />
      <Books title={secondbook.title} author={secondbook.author} />

    </>
  );
}

export default App;