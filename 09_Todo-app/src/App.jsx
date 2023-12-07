/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Header, TodoFooter, TodoList } from "./components/index";
import { ThemeProvider } from "./context";
import { TodoProvider } from "./context";

function App() {
  // theme setup
  const [theme, SetTheme] = useState("dark");

  const lightMode = () => {
    SetTheme("light");
  };
  const darkMode = () => {
    SetTheme("dark");
  };
  useEffect(() => {
    const htmlEl = document.querySelector("html");
    htmlEl.classList.remove("light", "dark");
    htmlEl.classList.add(theme);
  }, [theme]);

  // Addtodo setup
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };
  const deletedTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };
  const Todochecked = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [all, setAll] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const showAll = () => {
    setAll(true);
    setIsActive(false);
    setIsCompleted(false);
  };
  const showActive = () => {
    setAll(false);
    setIsActive(true);
    setIsCompleted(false);
  };
  const showCompleted = () => {
    setAll(false);
    setIsActive(false);
    setIsCompleted(true);
  };
  const clearAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <ThemeProvider value={{ theme, darkMode, lightMode }}>
      <TodoProvider value={{ todos, addTodo, Todochecked, updateTodo, deletedTodo }}>

        <div className=" bg-bg-light dark:bg-bg-dark overflow-x-hidden  w-screen h-screen font-Josefin text-[14px] select-none">

          < Header />

          <main className=" w-full  flex flex-col  items-center justify-center  ">
            {todos.map((todo ) => {
              if ((isActive && todo.completed) || (isCompleted && !todo.completed)) {
                return null;
              }
              return (
                <div key={todo.id} className="z-10 ">
                  <TodoList todo={todo} />
                </div>
            );
            })}
          </main>

          <footer className="w-full flex justify-center">

            <TodoFooter
              clearAllCompleted={clearAllCompleted}
              showAll={showAll}
              showActive={showActive}
              showCompleted={showCompleted}
            />

          </footer>

        </div>
        
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
