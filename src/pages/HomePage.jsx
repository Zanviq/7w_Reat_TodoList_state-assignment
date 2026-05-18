import ToDoList from "../components/ToDoList";
import { todos } from "../data/todos";

function HomePage() {
  return <ToDoList sectionTitle="오늘 할 일" todos={todos} />;
}

export default HomePage;
