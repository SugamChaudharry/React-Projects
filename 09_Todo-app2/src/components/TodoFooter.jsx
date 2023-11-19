import React from "react";
import { useSelector } from "react-redux"; 
import { showAll  , showActive , showCompleted , clearCompleted } from "../featuers/todo/todoSlice";
function TodoFooter() {
  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);

  const setColor = (e) => {
    e.target.parentNode.childNodes.forEach((element) => {
      element.className = "";
    });
    e.target.className = "dark:text-cyan-800 text-[#B83B5E]";
  };

  return (
    <div
      className={`  bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        w-[500px] p-c-padding flex items-center justify-between z-[2] 
        text-[#CEAB93] dark:text-[#3F4E4F]   text-lg`}>
      <div>
        <span className=" text-[#B83B5E] dark:text-cyan-800">{`${todos.length}`}</span>

        {`   item${todos.length > 1 ? "'s" : ""} left`}
      </div>

      <ul id="ul1" className="flex items-center justify-between w-[40%] cursor-pointer">
        <li
          className="dark:text-cyan-800 text-[#B83B5E]"

          onClick={
            (e) => {
            showAll()
            setColor(e);
          }}>
          All
        </li>
        <li
          className=""
         
          onClick={(e) => {
            showActive()
            setColor(e);
          }}>
          Active
        </li>
        <li
          className=""
        
          onClick={(e) => {
            showCompleted()
            setColor(e);
          }}>
          Completed
        </li>
      </ul>

      <div onClick={clearCompleted}>Clear complete</div>
    </div>
  );
}

export default TodoFooter;
