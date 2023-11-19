import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addTodo } from "../featuers/todo/todoSlice";
function TodoForm() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [todoText , setTodoText] = useState('')

  const add = (e)=>{
    if (!todoText) return;
    if (e.key === "Enter") { 
      dispatch(addTodo(todoText))     
      setTodoText('')
    }
  }
  return (
    <div
      className={` w-full h-[4.49rem] bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        flex items-center justify-center p-c-padding text-[14px] rounded-md 
        `}>
      <input
        type="text"
        value={todoText}
        onKeyDown={add}
        onChange={(e)=>{setTodoText(e.target.value)}}
        placeholder="Create a new todo...."
        className="w-full h-[2rem] pr-[1.8rem] pl-[2.1rem] bg-transparent  placeholder:text-[#727575] text-[#484b6a] dark:text-[#cacde8] text-lg focus:outline-none "
      />
    </div>
  );
}

export default TodoForm;
