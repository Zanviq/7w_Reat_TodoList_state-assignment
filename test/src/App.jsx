import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";
import { todos } from "./data/todos";

function App() {
  return (
    <>
      <ToDoHeader title="ToDo List" />
      <ToDoList sectionTitle="오늘 할 일" todos={todos} />
    </>
  );
}

export default App;