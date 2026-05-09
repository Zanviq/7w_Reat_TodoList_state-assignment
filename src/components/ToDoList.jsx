import { useState } from "react";
import TodoItem from "./ToDoItem";
import "./Todo.css";

function ToDoList({ sectionTitle, todos }) {
  const [todoList, setTodoList] = useState(todos);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [filter, setFilter] = useState("ALL");

  const toggleDone = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      item: input,
      done: false,
      priority: priority,
    };
    setTodoList([...todoList, newTodo]);
    setInput("");
  };

  const filteredList = todoList.filter((todo) => {
    if (filter === "DONE") return todo.done;
    if (filter === "NOT_DONE") return !todo.done;
    return true;
  });

  return (
    <section className="todo">
      <h2>{sectionTitle}</h2>

      <div className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="할 일을 입력하세요"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>
        <button onClick={addTodo}>추가</button>
      </div>

      <div className="todo-filter">
        <button
          className={filter === "ALL" ? "active" : ""}
          onClick={() => setFilter("ALL")}
        >
          전체
        </button>
        <button
          className={filter === "DONE" ? "active" : ""}
          onClick={() => setFilter("DONE")}
        >
          완료
        </button>
        <button
          className={filter === "NOT_DONE" ? "active" : ""}
          onClick={() => setFilter("NOT_DONE")}
        >
          미완료
        </button>
      </div>

      <ul className="todo-list">
        {filteredList.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo.item}
            done={todo.done}
            priority={todo.priority}
            onClick={() => toggleDone(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
