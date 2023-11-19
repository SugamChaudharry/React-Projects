import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'todo1',
        completed: false,
        isAll: true,
        isActive: false,
        isCompleted: false,
    }]
}
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    localStorageTodo: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
        isAll: true,
        isActive: false,
        isCompleted: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, text: action.payload } : todo
        ),
      };
    },
    tonggleTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    },
    showAll: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.id === action.payload.id
          ? { ...todo, isAll: true, isActive: false, isCompleted: false }
          : todo;
      });
    },
    showActive: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.id === action.payload.id
          ? { ...todo, isAll: false, isActive: true, isCompleted: false }
          : todo;
      });
    },
    showCompleted: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.id === action.payload.id
          ? { ...todo, isAll: false, isActive: false, isCompleted: true }
          : todo;
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed === false);
    },
  },
});

export const { addTodo , removeTodo , updateTodo , tonggleTodo , showAll , showActive , showCompleted , clearCompleted , localStorageTodo } = todoSlice.actions;

export default todoSlice.reducer;