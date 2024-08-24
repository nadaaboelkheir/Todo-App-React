import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoProvider from "../context/TodoContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../App.css";
const TodoPage = () => {
  return (
    <TodoProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="container">
          <h1 style={{ marginBottom: "40px" }}>Todo App</h1>
          <AddTodo />
          <TodoList />
        </div>
      </DndProvider>
    </TodoProvider>
  );
};

export default TodoPage;
