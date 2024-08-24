import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(e.target[0].value, e.target[1].value);
        e.target[0].value = ""; 
        e.target[1].value = "";
      }}
    >
      <input
        type="text"
        placeholder="Enter your todo"
        style={{
          width: "300px",
          height: "30px",
          marginRight: "10px",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <input
        type="text"
        placeholder="Enter your des"
        style={{
          width: "300px",
          height: "30px",
          marginRight: "10px",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <input
        type="submit"
        value="+ Add Todo"
        style={{
          backgroundColor: "#9E78CF",
          color: "white",
          width: "130px",
          height: "40px",
          borderRadius: "5px",
        }}
      />
    </form>
  );
};

export default AddTodo;
