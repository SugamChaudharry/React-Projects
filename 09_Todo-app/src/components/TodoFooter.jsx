import React from "react";
import useTheme from "../context/themeContext";
import { useTodo } from "../context";
function TodoFooter() {
  const { theme } = useTheme();
  const { todos } = useTodo();

  const setColor = (e) => {
      e.target.parentNode.childNodes.forEach((element) => {
        element.className = "";
      })
    e.target.className = "dark:text-cyan-800";
  };

  return (
    <div
      className={`  bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        w-[500px] p-c-padding flex items-center justify-between z-[2] 
        text-[#727575]   text-lg`}>
      <div>
        <span className="dark:text-cyan-800">{`${todos.length}`}</span>

        {`   item${todos.length > 1 ? "'s" : ""} left`}
      </div>

      <ul id="ul1" className="flex items-center justify-between w-[40%] cursor-pointer">
        <li
          className="dark:text-cyan-800"
          onClick={(e) => {
            setColor(e);
          }}>
          All
        </li>
        <li
          className=""
          onClick={(e) => {
            setColor(e);
          }}>
          Active
        </li>
        <li
          className=""
          onClick={(e) => {
            setColor(e);
          }}>
          Completed
        </li>
      </ul>

      <div>Clear complete</div>
    </div>
  );
}

export default TodoFooter;
