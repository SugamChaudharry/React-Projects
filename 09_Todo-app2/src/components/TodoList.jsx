import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo , updateTodo , tonggleTodo } from "../featuers/todo/todoSlice";

function TodoList({ todo }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.themes);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, text: text });
    setIsTodoEditable(false);
  };
  const tonggleCompleted = () => {
    dispatch(tonggleTodo(todo.id));
  };

  const pathData =
    "m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4";

  return (
    <div
      className={`  ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
				w-[500px] p-c-padding py-1 flex  items-center justify-center  rounded-t-md  ${
          theme === "dark" ? "border-line-dark" : "border-line-light"
        } border-b-[1px]  
				`}>
      <div
        className={`${isTodoEditable ? "hidden" : "flex"} `}
        id="checkBox"
        onClick={tonggleCompleted}>
        <svg width="45" height="45" viewBox="0 0 95 95">
          <rect
            x="20"
            y="20"
            width="50"
            height="50"
            stroke={theme === "dark" ? "white" : "black"}
            fill="none"
          />
          <g transform="translate(0,-952.36222)">
            {todo.completed && (
              <path
                d={pathData}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="2"
                fill="none"
              />
            )}
          </g>
        </svg>
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isTodoEditable}
        className={`w-full h-[2rem] pr-[1.8rem] pl-[2.1rem] bg-transparent  border-b-[1px] 
         ${isTodoEditable ? "dark:border-deep-purple-400 border-black" : "border-none"}
        placeholder:text-[#727575] ${ theme === 'dark' ? "text-[#7f84b4]" : " text-[#1a313a]"}  text-lg focus:outline-none overflow-hidden ${
          todo.completed && "line-through dark:text-gray-700"
        } `}
      />

      <div>
        <button
          className="inline-flex w-8 h-8  text-sm border-none justify-center items-center bg-transparent shrink-0 disabled:opacity-50"
          onClick={(e) => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}>
          {isTodoEditable ? "📁" : "✏️"}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm  border-none justify-center items-center   shrink-0"
          onClick={() => dispatch(removeTodo(todo.id))}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoList;
