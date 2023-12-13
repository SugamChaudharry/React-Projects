import { useSelector } from "react-redux";
import { store } from "../app/store.js";
import AddCloseBtn from "./AddCloseBtn";
import Card from "./Card.jsx";

import { useEffect, useRef } from "react";

const Foreground = () => {
    const ref = useRef(null);
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    useEffect(() => {
      localStorage.setItem("todo2", JSON.stringify(todos));
    }, [todos]);

  return (
    <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] ">
      <AddCloseBtn />
      
        {todos.map((todo) => {
          if (todo.id !== 1) {
            return (
              <div key={todo.id} className="z-10 ">
                <Card refrance={ref} todo={todo} />
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default Foreground;
