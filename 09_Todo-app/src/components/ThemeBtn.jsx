import React from 'react'
import  useTheme  from '../context/themeContext';

function ThemeBtn() {
    const {theme , lightMode , darkMode} = useTheme();

    const ThemeSwitcher = ()=>{
        if (theme === 'dark') {
            lightMode()
        }else{
            darkMode()
        }
    }
  return (
    <img
      className="w-6 md:w-8"
      src={theme === "dark" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
      alt="ThemeSwitecher"
      onClick={ThemeSwitcher}
    />
  );
}

export default ThemeBtn