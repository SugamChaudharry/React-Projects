import React, { useState } from "react";
import useTheme from "../context/themeContext";
import { Checkbox } from "@material-tailwind/react";
import { useTodo } from "../context";

function TodoList({ todo , id }) {
  const { theme } = useTheme();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [Msg, setMsg] = useState(todo.todoMsg);
  const { editTodo,Todochecked,deletedTodo } = useTodo();

  return (
    <div
      className={`  dark:bg-card-dark bg-card-light
				w-[500px] p-c-padding   flex  items-center justify-center  rounded-t-md border-gray-800
				dark:border-white border-b-[1px] 
				`}>
      <div
        className={`${isTodoEditable ? "hidden" : "flex"} `}
        id="checkBox"
        onClick={(e) => {
          const todos = JSON.parse(e.view.localStorage.todos);
          todos.forEach((todo) => {
            if (todo.id === id) {
              Todochecked(todo.id);
            }
          });

          const pathEl = `<path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
           stroke=${
             theme === "dark" ? "white" : "black"
           } stroke-width="3" fill="none" class="path1"></path>`;
          if (e.target.nodeName === "svg") {
            e.target.childNodes[1].innerHTML =
              e.target.childNodes[1].innerHTML == "." ? pathEl : ".";
          }
        }}>
        <svg width="45" height="45" viewBox="0 0 95 95">
          <rect
            x="20"
            y="20"
            width="50"
            height="50"
            stroke={`${theme === "dark" ? "white" : "black"}`}
            fill="none"></rect>
          <g transform="translate(0,-952.36222)">.</g>
        </svg>
      </div>

      <input
        type="text"
        value={Msg}
        onChange={(e) => setMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className="w-full h-[2rem] pr-[1.8rem] pl-[2.1rem] bg-transparent border-none placeholder:text-[#727575] text-[#484b6a] dark:text-[#cacde8]  text-lg focus:outline-none overflow-hidden "
      />
      <div>
        <button
          className="inline-flex w-8 h-8  text-sm border-none justify-center items-center bg-transparent shrink-0 disabled:opacity-50"
          onClick={(e) => {
            if (todo.completed) return;

            if (isTodoEditable) {
              const todos = JSON.parse(e.view.localStorage.todos);
              todos.forEach((todo) => {
                if (todo.id === id) {
                  editTodo(todo.id, todo);
                }
              });
              setIsTodoEditable((prev) => !prev);
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}>
          {isTodoEditable ? "📁" : "✏️"}
        </button>

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm  border-none justify-center items-center   shrink-0"
          onClick={() => deletedTodo(todo.id)}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoList;
