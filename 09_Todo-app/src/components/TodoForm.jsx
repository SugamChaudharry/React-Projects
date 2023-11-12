import React from "react";
import useTheme from "../context/themeContext";
function TodoForm() {
  const { theme} = useTheme();

  return (
    <div
      className={` w-full h-[4.49rem] bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        flex items-center justify-center p-c-padding text-[14px] 
        `}>
      <input
        type="text"
        placeholder="Create a new todo...."
        className="w-full h-[2rem] pr-[1.8rem] pl-[2.1rem] bg-transparent border-none placeholder:text-[#727575] text-[#cacde8] text-"
      />
    </div>
  );
}

export default TodoForm;
