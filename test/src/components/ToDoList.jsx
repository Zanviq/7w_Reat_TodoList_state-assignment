import TodoItem from "./ToDoItem";

function ToDoList({ sectionTitle, todos }) {
  return (
    <section>
      <h2>{sectionTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo.item} />
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;