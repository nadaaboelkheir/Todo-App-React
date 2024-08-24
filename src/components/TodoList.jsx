import Grid from "@mui/material/Grid";
import TodoItem from "./TodoItem";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo, editeTodo } = useContext(TodoContext);

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
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
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
              editeTodo={editeTodo}
            />
          ))}
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
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
              editeTodo={editeTodo}
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default TodoList;
