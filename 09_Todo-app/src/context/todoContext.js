import {createContext , useContext} from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "1",
      todoMsg: "ascasc",
      completed: false,
    },
  ],
  addTodo: (newTodo) => {},
  Todochecked: (id) => {},
  updateTodo: (id , todo) => {},
  deletedTodo: (id) => {}, 
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;