import { useState, useEffect } from "react";
import TodoItem from "./ToDoItem";
import { todoApi } from "../api/todoApi";
import "./Todo.css";

function ToDoList({ sectionTitle, onlyActive = false }) {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await todoApi.getTodos();
        setTodoList(data);
      } catch (err) {
        console.error("목록 조회 실패:", err);
      }
    };
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (input.trim() === "") return;
    try {
      await todoApi.createTodo(input);
      const data = await todoApi.getTodos();
      setTodoList(data);
      setInput("");
    } catch (err) {
      console.error("추가 실패:", err);
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      await todoApi.toggleTodo(id, !completed);
      const data = await todoApi.getTodos();
      setTodoList(data);
    } catch (err) {
      console.error("상태 변경 실패:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await todoApi.deleteTodo(id);
      const data = await todoApi.getTodos();
      setTodoList(data);
    } catch (err) {
      console.error("삭제 실패:", err);
    }
  };

  const baseList = onlyActive
    ? todoList.filter((todo) => !todo.completed)
    : todoList;

  const filteredList = baseList.filter((todo) => {
    if (filter === "DONE") return todo.completed;
    if (filter === "NOT_DONE") return !todo.completed;
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
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
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
            content={todo.content}
            completed={todo.completed}
            onToggle={() => handleToggle(todo.id, todo.completed)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
