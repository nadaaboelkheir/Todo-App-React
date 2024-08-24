import Grid from "@mui/material/Grid";
import TodoItem from "./TodoItem";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useDrop } from "react-dnd";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  // Drop zone for incomplete todos (accept completed todos)
  const [{ isOverIncomplete }, dropIncomplete] = useDrop({
    accept: "todo",
    drop: (todo) => {
      if (todo.completed) {
        toggleTodo(todo.id);
      }
    },
    collect: (monitor) => ({
      isOverIncomplete: !!monitor.isOver(),
    }),
  });

  // Drop zone for completed todos (accept incomplete todos)
  const [{ isOverComplete }, dropComplete] = useDrop({
    accept: "todo",
    drop: (todo) => {
      if (!todo.completed) {
        toggleTodo(todo.id);
      }
    },
    collect: (monitor) => ({
      isOverComplete: !!monitor.isOver(),
    }),
  });

  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "20px",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {/* Incomplete Todos */}
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        ref={dropIncomplete}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: isOverIncomplete ? "#15101C" : "transparent",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#9E78CF",
            color: "white",
            minWidth: 275,
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center",
            mb: 2,
          }}
        >
          Incomplete Todos
        </Typography>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </Grid>

      {/* Completed Todos */}
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        ref={dropComplete}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: isOverComplete ? "#15101C" : "transparent",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#9E78CF",
            color: "white",
            minWidth: 275,
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center",
            mb: 2,
          }}
        >
          Completed Todos
        </Typography>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default TodoList;
