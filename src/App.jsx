import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoHeader from "./components/ToDoHeader";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ActivePage from "./pages/ActivePage";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <BrowserRouter>
      <ToDoHeader title="ToDo List" />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/active" element={<ActivePage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
