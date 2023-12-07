import React from "react";
import useTheme from "../context/themeContext";
import { useTodo } from "../context";
function TodoFooter({ clearAllCompleted, showAll, showActive, showCompleted }) {
  const { theme } = useTheme();
  const { todos } = useTodo();

  const setColor = (e) => {
    e.target.parentNode.childNodes.forEach((element) => {
      element.className = "";
    });
    e.target.className = "dark:text-cyan-800 text-[#B83B5E]";
  };

  return (
    <div
      className={`  bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        w-[350px] md:w-[500px] p-c-padding flex items-center justify-between z-[2] 
        text-[#CEAB93] dark:text-[#3F4E4F]  text-base  md:text-lg`}>
      <div>
        <span className=" text-[#B83B5E] dark:text-cyan-800">{`${todos.length}`}</span>

        {`   item${todos.length > 1 ? "'s" : ""} left`}
      </div>

      <ul id="ul1" className="flex flex-col  md:flex-row items-center justify-between w-[40%] cursor-pointer">
        <li
          className="dark:text-cyan-800 text-[#B83B5E]"
          onClick={(e) => {
            showAll();
            setColor(e);
          }}>
          All
        </li>
        <li
          className=""
          onClick={(e) => {
            showActive();
            setColor(e);
          }}>
          Active
        </li>
        <li
          className=""
          onClick={(e) => {
            showCompleted();
            setColor(e);
          }}>
          Completed
        </li>
      </ul>

      <div onClick={clearAllCompleted}>Clear complete</div>
    </div>
  );
}

export default TodoFooter;
