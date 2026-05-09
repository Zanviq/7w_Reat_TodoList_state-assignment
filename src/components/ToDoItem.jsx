function TodoItem({ item, done, priority, onClick }) {
  return (
    <li className={`todo-item ${done ? "done" : ""}`} onClick={onClick}>
      <span className="todo-check">{done ? "✅" : "⬜"}</span>
      <span className="todo-text">{item}</span>
      <span className={`priority ${priority}`}>{priority}</span>
    </li>
  );
}

export default TodoItem;
