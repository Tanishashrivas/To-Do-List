const darkMode = () => {
    const title = document.querySelector(".title");
    const formInput = document.querySelector(".formInput");
    const add = document.querySelector(".add");
    const listItem = document.querySelector(".listItem");
    const toggleModeBtn = document.querySelector(".toggleModeBtn");

    document.body.style.transition = "background-color 0.4s ease";
    document.body.style.backgroundColor = "#181717f3";
    if (title) title.classList.add("titleDark");
    if (formInput) formInput.classList.add("formInputDark");
    if (add) add.classList.add("addDark");
    if (listItem) listItem.classList.add("listItemDark");
    toggleModeBtn.innerHTML = "☀️";
  };
  
  const lightMode = () => {
    const title = document.querySelector(".title");
    const formInput = document.querySelector(".formInput");
    const add = document.querySelector(".add");
    const listItem = document.querySelector(".listItem");
    const toggleModeBtn = document.querySelector(".toggleModeBtn");

    document.body.style.transition = "background-color 0.4s ease";
    document.body.style.backgroundColor = "white";
    if (title) title.classList.remove("titleDark");
    if (formInput) formInput.classList.remove("formInputDark");
    if (add) add.classList.remove("addDark");
    if (listItem) listItem.classList.remove("listItemDark");
    toggleModeBtn.innerHTML = "🌙";
  };
  
  export { darkMode, lightMode };
  