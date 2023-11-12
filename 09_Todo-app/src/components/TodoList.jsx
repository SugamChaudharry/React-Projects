import React from "react";
import useTheme from "../context/themeContext";
function TodoList() {
  const {theme} = useTheme()
  return (
    <div
      className={`  bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        w-[500px] p-c-padding px-0 flex flex-col items-center justify-center z-[2] rounded-t-md border-gray-800
        dark:border-white border-b-[1px]
        `}>
      <input
        type="text"
        // readOnly="true"
        placeholder="dsagbasbabs"
        className="w-full h-[2rem] pr-[1.8rem] pl-[2.1rem] bg-transparent border-none placeholder:text-[#727575] text-[#484b6a] dark:text-[#cacde8]  text-lg focus:outline-none overflow-hidden "
      />
    </div>
  );
}

export default TodoList;
