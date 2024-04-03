import { useState } from "react";

function Header() {
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    if(mode === "light"){
      darkMode();
      setMode("dark");
    }
    else{
      lightMode();
      setMode("light");
    }
  }

  return (
    <div className="header">
      <h1 className="title">Todo List</h1>
      {/* <button className="toggleModeBtn modeLight" onClick={handleModeChange}>🌙</button> */}
    </div>
  );
}

export default Header;
