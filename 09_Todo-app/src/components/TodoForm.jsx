import React, { useState } from "react";
import useTheme from "../context/themeContext";
import { useTodo } from "../context";

function TodoForm() {
  const { theme} = useTheme();
  const {addTodo} = useTodo();

  const [todoMsg , setTodoMsg] = useState('')
  const add = (e)=>{
    if (e.key === "Enter") {      
      const newTodo = {
        todoMsg,
        completed: false,
      };
        addTodo(newTodo);
      setTodoMsg('')
    }
  }
  return (
    <div
      className={` w-full h-[4.49rem] bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        flex items-center justify-center p-c-padding text-[14px] rounded-md
        `}>
      <input
        type="text"
        value={todoMsg}
        onKeyDown={add}
        onChange={(e)=>{setTodoMsg(e.target.value)}}
        placeholder="Create a new todo...."
        className="w-full h-[2rem] pr-[1.8rem] pl-[2.1rem] bg-transparent  placeholder:text-[#727575] text-[#484b6a] dark:text-[#cacde8] text-lg focus:outline-none "
      />
    </div>
  );
}

export default TodoForm;
