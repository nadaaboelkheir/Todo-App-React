/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/LocalStorage";
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getFromLocalStorage());
  const date = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",

    hour12: false,
  });

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  const addTodo = (title,description) => {
    if (title.trim()) {
      setTodos([
        ...todos,
        {
          title,
          description,
          completed: false,
          id: uuidv1(),
          date: date,
        },
      ]);
    } else {
      alert("Please enter a valid title");
      return;
    }
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              date: date,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  const editTodo = (id, title, description) => {
    if (title.trim()&&description.trim()) {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, title, description } : todo))
      );
    } else {
      alert("Please enter a valid title");
      return;
    }
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
