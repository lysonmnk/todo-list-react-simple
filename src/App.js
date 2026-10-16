import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Fitur 1: menambah tugas
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Fitur 2: menandai tugas selesai / belum selesai
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Fitur 3: menghapus tugas
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const sisa = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p className="info">
        {todos.length === 0
          ? "Belum ada tugas."
          : `${sisa} dari ${todos.length} tugas belum selesai`}
      </p>
    </div>
  );
}

export default App;