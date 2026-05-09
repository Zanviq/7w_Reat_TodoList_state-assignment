import { useState } from "react";
import TodoItem from "./ToDoItem";

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
    <section>
      <h2>{sectionTitle}</h2>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>
        <button onClick={addTodo}>추가</button>
      </div>

      <div>
        <button onClick={() => setFilter("ALL")}>전체</button>
        <button onClick={() => setFilter("DONE")}>완료</button>
        <button onClick={() => setFilter("NOT_DONE")}>미완료</button>
      </div>

      <ul>
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
