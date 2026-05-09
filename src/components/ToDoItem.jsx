function TodoItem({ item, done, priority, onClick }) {
  return (
    <li onClick={onClick}>
      {done ? "✅" : "⬜"} [{priority}] {item}
    </li>
  );
}

export default TodoItem;
