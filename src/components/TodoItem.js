function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span
        className="todo-text"
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;
