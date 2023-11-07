import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "todo msg",
            completed:false,
        },
    ],
    addTodo : (todo) => {},
    updatedTodo  :(id , todo) => {},
    deletedTodo :(id) =>{},
    ToggleComplete :(id) =>{}, 
})


export const UseTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider