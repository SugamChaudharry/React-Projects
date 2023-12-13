import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featuers/todo/todoSlice";
function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!discription || !title) return;

    dispatch(addTodo({
      title: title,
      discription: discription,
    }));
    setTitle("");
    setDiscription("");
  };

  return (
    <div className=" w-[30%] h-[70%] absolute top-[20%] left-[35%] inputBg animate-jump-in flex flex-col items-center ">
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center">
        <span className="font-bold text-4xl text-slate-500 capitalize pb-5">HEADING</span>
        <div className="w-full h-[20%] flex justify-center">
          <input 
          type="text"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          className="input w-[80%] h-[70px]" />
        </div>

        <span className="font-bold text-4xl text-slate-500 pb-5">TODO</span>
        <div className="w-full h-[14rem] flex justify-center pb-5">

          <textarea 
          type="text"
          value={discription}
          onChange={(e)=>{setDiscription(e.target.value)}}
          className="resize-none max-h-[14rem] w-[80%] bg-transparent input tracking-[2px] "></textarea>
        </div>

        <button
          type="submit"
          title="Add New"
          className="group cursor-pointer outline-none hover:rotate-90 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300">
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"></path>
            <path d="M8 12H16" strokeWidth="1.5"></path>
            <path d="M12 16V8" strokeWidth="1.5"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input