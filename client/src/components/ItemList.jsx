
function ItemList({tasks, setTasks}) {

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);  // _ means ignore that parameter
    setTasks(updatedTasks);
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
          <p className="textt"> {task} </p>
          <button className="delete" onClick={() => handleDelete(index)}>🗑️</button>
          <button className="moveUp" onClick={() => handleMoveUp(index)}>⬆️</button>
          <button className="moveDown" onClick={() => handleMoveDown(index)}>⬇️</button>
        </li>
      ))}
    </ol>
  );
}

export default ItemList;
