import { useEffect, useState } from "react";
import { Github, ThemeBtn, TodoFooter, TodoForm, TodoList } from "./components/index";
import { useSelector } from "react-redux";


function App() {
  const todos = useSelector((state) => state.todos.todos);
  const theme = useSelector((state) => state.theme.themes);

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    htmlEl.classList.remove("light", "dark");
    htmlEl.classList.add(theme);  
  }, [theme]);

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
    <div className=" bg-bg-light dark:bg-bg-dark overflow-x-hidden  w-screen h-screen font-Josefin text-[14px] select-none">
      <header className="w-full relative h-[230px] flex items-center justify-center z-[1]">
        <img
          src={theme === "dark" ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"}
          alt="banner"
          className="w-full absolute h-[270px] top-0 left-0 object-cover"
        />

        {/* top card */}
        <div className=" w-[500px]  flex flex-col items-center justify-between z-[2]">
          <div className="w-full mb-5 mt-[5rem] flex items-center justify-between">
            <h1 className="text-slate-100 text-4xl tracking-[1rem] leading-[1.1rem] font-bold ">
              TODO
            </h1>

            <Github />
            <ThemeBtn />
          </div>
          <TodoForm />
        </div>
      </header>

      <main className=" w-full  flex flex-col  items-center justify-center  ">
        {todos.map((todo) => {
          if ((isActive && todo.completed) || (isCompleted && !todo.completed)) {
            return null;
          }
          if(todo.id !== 1){
            return (
              <div key={todo.id} className="z-10 ">
                <TodoList todo={todo} />
              </div>
            );
          }else{
            return null
          }
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
  );
}

export default App;
