import { useState } from "react";
import TodoItem from "./ToDoItem";

function ToDoList({ sectionTitle, todos }) {
  const [todoList, setTodoList] = useState(todos);

  const toggleDone = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <section>
      <h2>{sectionTitle}</h2>
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo.item}
            done={todo.done}
            onClick={() => toggleDone(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
