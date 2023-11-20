import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../featuers/todo/todoSlice";
import themeReducer from "../featuers/theme/themeSlice";

export const store = configureStore({
  reducer:{
    todos: todoReducer,
    theme: themeReducer,
  }
});
