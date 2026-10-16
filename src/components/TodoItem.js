function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
          aria-label={`Tandai selesai tugas: ${todo.text}`}
        />
        <span className="todo-text">{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;
