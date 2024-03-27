function ItemList({ tasks }) {
  return (
    <ul className="ulTaskList">
      {tasks.map((task, index) => (
        <li key={index} className="listItem">
          {task}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
