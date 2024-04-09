import {useState} from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import TodoForm from "./TodoForm";
import ItemList from "./ItemList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if(task.trim() !== ""){ //to prevent the empty string from getting added
    setTasks(t => [...t, {task:task, completed:false}]);
    }
  };

  return (
    <>
      <Header />
      {console.log(tasks)}
      <TodoForm addTask={addTask}/>
      <ItemList tasks={tasks} setTasks={setTasks}/>
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