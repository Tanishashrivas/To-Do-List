import { useEffect } from "react";
import axios from "axios";

function ItemList({tasks, setTasks}) {
  useEffect(() => {
    const fetchData = async() => {
      try{
        const resp = await axios.get("http://localhost:3000/todos");
        setTasks(resp.data);

      }catch(error){
        console.log("error fetching data", error);
      }
    }

    fetchData();
  }, [])

  const handleDelete = async(index) => {
    const temp = tasks[index];

    const updatedTasks = tasks.filter((_, i) => i !== index);  // _ means ignore that parameter
    setTasks(updatedTasks);

    //backend data  sending
    try{
      const resp = await axios.post("http://localhost:3000/delete", {temp});
      console.log(resp.data);
    }
      catch(error){
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