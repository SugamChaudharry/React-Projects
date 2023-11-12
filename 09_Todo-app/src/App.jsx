/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { ThemeBtn, TodoFooter, TodoForm, TodoList } from "./components/index";
import { ThemeProvider } from "./context/themeContext";

function App() {
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

  return (
    <ThemeProvider value={{ theme, darkMode, lightMode }}>
      <div className=" bg-bg-light dark:bg-bg-dark w-full h-screen font-Josefin text-[14px]">
        <header className="w-full relative h-[230px] flex items-center justify-center z-[1]">
          <img
            src={theme === "dark" ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"}
            alt="banner"
            className="w-full absolute h-[240px] top-0 left-0 object-cover"
          />
          {/* top card */}
          <div className=" w-[500px]  flex flex-col items-center justify-between z-[2]">
            <div className="w-full mb-5 mt-[5rem] flex items-center justify-between">
              <h1 className="text-slate-100 text-4xl tracking-[1rem] leading-[1.1rem] font-bold ">
                TODO
              </h1>
              <ThemeBtn />
            </div>
            <TodoForm />
          </div>
        </header>
        <main className=" w-full  flex flex-col  items-center justify-center ">
          <TodoList />
          <TodoList />
          <TodoList />
        </main>
        <footer className="w-full flex justify-center">
        <TodoFooter />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;