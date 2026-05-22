function TodoItem({ content, completed, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${completed ? "done" : ""}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span className="todo-text">{content}</span>
      <button
        type="button"
        className="todo-delete"
        onClick={onDelete}
        aria-label="삭제"
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
