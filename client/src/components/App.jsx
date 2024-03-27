import Header from "./Header";
import TodoForm from "./TodoForm";
import ItemList from "./ItemList";
import {useState} from "react";
import PropTypes from "prop-types";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if(task.trim() !== ""){ //to prevent the empty string from getting added
    setTasks([...tasks, task]);
    }
  };

  return (
    <>
      <Header />
      <TodoForm addTask={addTask}/>
      <ItemList tasks={tasks}/>
    </>
  );
}

ItemList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string)
}
ItemList.defaultProps = {
  tasks: []
}

export default App;
