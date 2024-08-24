import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);

  return (
    <form
      style={{
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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
          width: "90%",
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
          width: "90%",
          height: "30px",
          marginRight: "10px",
          borderRadius: "5px",
          padding: "5px",
        }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "#9E78CF",
          color: "white",
          width: "20%",
          height: "40px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        + Add
      </button>
    </form>
  );
};

export default AddTodo;
