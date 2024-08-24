import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoProvider from "../context/TodoContext";
import "../App.css";
const TodoPage = () => {
  return (
    <TodoProvider>
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoPage;
