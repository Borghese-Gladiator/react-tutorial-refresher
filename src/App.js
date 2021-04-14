import { useState, useRef } from "react";
import "./styles.css";

/*
NOTES:
React Keys: If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated.
React refs and useRef
- To perform common actions such as clearing out an input's value or focusing our input we can use what's called a ref.
- using inputRef, we create a reference to our input element to access wherever we like
- within handleAddTodo function, we can access property inputRef.current & can mutate it directly
- we use it to automatically clear input here

OVERALL:
- learned window.confirm for dialog prompt
- reorder to have container component at top w/ presentation components below
- learned to pass setState down & just use that hook to update state for all components (as it bubbles up)
*/


export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);
  
  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoList todos={todos} setTodos={setTodos} />
      <AddToDo setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    // if t.id === todo.id => changes done value to opposite
    // else, do nothing
    const updatedTodos = todos.map((t) => {
      return (t.id === todo.id
        ? {
          ...t,
          done: !t.done
        }
        : t)
    })
    setTodos(updatedTodos)
  }
  
  if (!todos.length) {
    return <p>No todos left!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : ""
          }}
          key={todo.id}
        >
          {todo.text}
          {/* pass todo data down as a prop to DeleteTodo */}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  )
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      x
    </span>
  );
}

function AddToDo({ setTodos }) {
  const inputRef = useRef();

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
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}