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

export default function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoList />
    </div>
  );
}
