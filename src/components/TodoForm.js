import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Tugas tidak boleh kosong atau hanya berisi spasi.");
      return;
    }
    onAdd(text.trim());
    setText("");
    setError("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form
        onSubmit={handleSubmit}
        className="todo-form"
        style={{ marginBottom: error ? "6px" : "0" }}
      >
        <input
          type="text"
          placeholder="Tambahkan tugas baru..."
          value={text}
          onChange={handleChange}
          maxLength={100}
        />
        <button type="submit">Tambah</button>
      </form>
      {error && (
        <p style={{ color: "#ef4444", fontSize: "13px", margin: "4px 0 0 2px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default TodoForm;
