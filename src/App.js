import { useState } from "react";
import "./styles.css";

/*
NOTES:
React Keys: If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated.
*/

function TodoList({ todos }) {
  return (
    <ul>
      {
        todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))
      }
    </ul>
  )
}

function AddToDo({ setTodos }) {
  function handleAddTodo(event) {
    event.preventDefault()
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoList todos={todos} />
      <AddToDo setTodos={setTodos} />
    </div>
  );
}
