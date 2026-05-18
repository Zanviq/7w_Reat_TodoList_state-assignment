import ToDoList from "../components/ToDoList";
import { todos } from "../data/todos";

function ActivePage() {
  return <ToDoList sectionTitle="미완료 할 일" todos={todos} onlyActive />;
}

export default ActivePage;
