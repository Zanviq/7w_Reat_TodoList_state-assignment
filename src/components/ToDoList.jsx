import { useState, useEffect, useRef } from "react";
import TodoItem from "./ToDoItem";
import "./Todo.css";

const STORAGE_KEY = "todos";

function ToDoList({ sectionTitle, todos, onlyActive = false }) {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return todos;
  });
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [filter, setFilter] = useState("ALL");
  const inputRef = useRef(null);

  console.log("렌더링 input:", input);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log("localStorage 저장 실행:", todoList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const toggleDone = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
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

  const baseList = onlyActive
    ? todoList.filter((todo) => !todo.done)
    : todoList;

  const filteredList = baseList.filter((todo) => {
    if (filter === "DONE") return todo.done;
    if (filter === "NOT_DONE") return !todo.done;
    return true;
  });

  return (
    <section className="todo">
      <h2>{sectionTitle}</h2>

      <div className="todo-form">
        <input
          ref={inputRef}
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

      {!onlyActive && (
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
      )}

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
