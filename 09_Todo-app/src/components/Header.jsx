import React from 'react'
import { useState } from 'react';
import Github from './Github';
import ThemeBtn from './ThemeBtn';
import TodoForm from './TodoForm';

function Header() {
     const [theme, SetTheme] = useState("dark");
  return (
    <header className="w-full relative h-[230px] flex items-center justify-center z-[1]">
      <img
        src={theme === "dark" ? "images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"}
        alt="banner"
        className="w-full absolute h-[190px] md:h-[210px] lg:h-[270px] top-0 left-0 object-cover"
      />
      {/* top card */}
      <div className=" w-[350px] md:w-[500px]  flex flex-col items-center justify-between z-[2]">
        <div className="w-full mb-5 mt-[5rem] flex items-center justify-between">
          <h1 className="text-slate-100 text-2xl md:text-4xl tracking-[9px] md:tracking-[1rem] leading-[1.1rem] font-bold text-white ">
            TODO
          </h1>

          <Github />
          <ThemeBtn />
        </div>
        <TodoForm />
      </div>
    </header>
  );
}

export default Header