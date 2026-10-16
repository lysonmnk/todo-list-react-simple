import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoForm;
