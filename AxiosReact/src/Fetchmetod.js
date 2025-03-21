import { useEffect, useState } from "react";

interface TodoItem {
  completed: Boolean;
  id: Number;
  title: String;
  userId: Number;
}

function Fetchmetod() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response)
      .then((e) => e.json())
      .then((e) => setTodos(e));
  }, []);
  return (
    <div className="App">
      {todos.map((todo) => {
        return (
          <>
            <li>{todo.title}</li>
            <li>{todo.userId}</li>
            <li>{todo.id}</li>
          </>
        );
      })}
    </div>
  );
}

export default Fetchmetod;
