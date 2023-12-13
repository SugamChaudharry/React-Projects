import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo2")) || [
    {
      id: 1,
      heading: "",
      description: "",      
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log('a.p' , action.payload);
      state.todos.push({
        id: nanoid(),
        heading: action.payload.title,
        description: action.payload.discription,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, heading: action.payload.heading , description: action.payload.description } : todo
        ),
      };
    },
  },
});

export const { addTodo, removeTodo, updateTodo, storedTodo } = todoSlice.actions;

export default todoSlice.reducer;
