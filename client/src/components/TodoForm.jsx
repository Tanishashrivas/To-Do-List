import {useState} from "react";
import axios from "axios";

function TodoForm({addTask}) {
  const [text, setText] = useState("");

  const onFormSubmit = async(e) => {
    e.preventDefault();

    //backend data sending...
    try {
      const response = await axios.post("http://localhost:3000/todos", { text });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
    
    addTask(text); // Call parent component function to add task
    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
    <form className="form" onSubmit={onFormSubmit} action="/todos" method="POST">
      <input
        className="formInput"
        placeholder="Enter the task..."
        value={text}
        onChange={(e) => handleInputChange(e)}
      />
      <button className="add">Add</button>
    </form>
  </>
  );
}

export default TodoForm;
