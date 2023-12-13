import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../featuers/todo/todoSlice";


export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});
