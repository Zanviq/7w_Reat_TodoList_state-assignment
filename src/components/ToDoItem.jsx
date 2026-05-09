function TodoItem({ item, done, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: "pointer",
        textDecoration: done ? "line-through" : "none",
        color: done ? "gray" : "black",
        userSelect: "none",
      }}
    >
      {done ? "✅" : "⬜"} {item}
    </li>
  );
}

export default TodoItem;
