import React from 'react'
import useTheme from '../context/themeContext';
function TodoFooter() {
    const { theme } = useTheme();
    return (
      <div
        className={`  bg-[ ${theme === "dark" ? "bg-card-dark" : "bg-card-light"}
        w-[500px] p-c-padding flex items-center justify-between z-[2] 
        text-[#727575]   text-lg`}>
        <div>left item</div>
        <div className="flex items-center justify-between w-[40%]">
          <p>All</p>
          <p>Active</p>
          <p>Complete</p>
        </div>
        <div>Clear complete</div>
      </div>
    );
}

export default TodoFooter