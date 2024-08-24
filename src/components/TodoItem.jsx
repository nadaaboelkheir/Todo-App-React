/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useDrag } from "react-dnd";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "todo",
    item: { id: todo.id, completed: todo.completed },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Card
      ref={drag}
      sx={{
        minWidth: 275,
        mt: 3,
        borderRadius: "10px",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            mb: 2,
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {todo.description}
        </Typography>
        <Typography color="text.secondary">
          {todo.completed ? "Completed At " : "Added At"} {todo.date}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color="error"
          aria-label="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton color="error" aria-label="delete">
          <EditNoteIcon />
        </IconButton>
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          inputProps={{ "aria-label": "complete todo" }}
          color="success"
        />
      </CardActions>
    </Card>
  );
};

export default TodoItem;
