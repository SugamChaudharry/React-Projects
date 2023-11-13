/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { ThemeBtn, TodoFooter, TodoForm, TodoList } from "./components/index";
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
  const [todos , setTodos] = useState([])

  const addTodo = (todo)=>{ 
    setTodos((prevTodo) => [ { id: Date.now(),...todo} ,...prevTodo])
  };
  
    useEffect(()=>{
      const todos =  JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    },[])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])
  

  const Todochecked = (id) => {
    todos.forEach(todo => { 
            if (todo.id === id) {
              todo.completed = !todo.completed;              
            }
    })
  };

  const editTodo = (id , todo) => {
    
  };
  const deletedTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id))
  };
  

  return (
    <ThemeProvider value={{ theme, darkMode, lightMode }}>
      <TodoProvider value={{ todos, addTodo, Todochecked, editTodo, deletedTodo }}>
        <div className=" bg-bg-light dark:bg-bg-dark overflow-x-hidden  w-screen h-screen font-Josefin text-[14px]">
          <header className="w-full relative h-[230px] flex items-center justify-center z-[1]">
            <img
              src={
                theme === "dark" ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"
              }
              alt="banner"
              className="w-full absolute h-[270px] top-0 left-0 object-cover"
            />
            
            {/* top card */}
            <div className=" w-[500px]  flex flex-col items-center justify-between z-[2]">
              <div className="w-full mb-5 mt-[5rem] flex items-center justify-between">
                <h1 className="text-slate-100 text-4xl tracking-[1rem] leading-[1.1rem] font-bold text-white ">
                  TODO
                </h1>
                <ThemeBtn />
              </div>
              <TodoForm />
            </div>
          </header>
          <main className=" w-full  flex flex-col  items-center justify-center  ">
            {todos.map((todo) => (
              <div key={todo.id} className="z-10 ">
                <TodoList todo={todo} id={todo.id} />
              </div>
            ))}
          </main>
          <footer className="w-full flex justify-center">
            <TodoFooter />
          </footer>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
