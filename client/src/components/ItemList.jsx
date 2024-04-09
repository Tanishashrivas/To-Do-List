import { useEffect } from "react";
import axios from "axios";

function ItemList({tasks, setTasks}) {

  useEffect(() => {
    const fetchTask = async() => {
    try{
      const response = await axios.get("http://localhost:3000/tasks");
      // console.log(response.data);
      setTasks(response.data);
    }
    catch(error){
      console.log("Error fetching the data", error);
    }
  }

  fetchTask();
  }, [])

  const handleDelete = async(index) => {
    const temp = tasks[index];
    // console.log(temp);
    
    const updatedTasks = tasks.filter((_, i) => i !== index);  // _ means ignore that parameter
    setTasks(updatedTasks);

    //sending this to backend to delete from the db as well
    try{
      const response = await axios.post("http://localhost:3000/delete", { task: temp });
      console.log(response.data);
    }catch(error){
      console.error(error);
    }
  }
  const handleMoveUp = (index) => {
    const updatedTasks = [...tasks];
    if(index > 0){
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const handleMoveDown = (index) => {
    const updatedTasks = [...tasks];
    if(index < tasks.length-1){
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <ol className="olTaskList">
      {tasks.map((task, index) => (
        <li key={index} className="listItem">
          <p className="textt"> {task.task} </p>
          <button className="delete" onClick={() => handleDelete(index)}>🗑️</button>
          <button className="moveUp" onClick={() => handleMoveUp(index)}>⬆️</button>
          <button className="moveDown" onClick={() => handleMoveDown(index)}>⬇️</button>
        </li>
      ))}
    </ol>
  );
}

export default ItemList;