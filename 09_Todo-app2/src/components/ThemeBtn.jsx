import React from 'react'
import { darkMode , lightMode } from '../featuers/theme/themeSlice';
import { useSelector } from 'react-redux';
function ThemeBtn() {
    const theme = useSelector((state) => state.themes);
    const ThemeSwitcher = ()=>{
        if (theme === 'dark') {
            lightMode()
        }else{
            darkMode()
        }
    }
  return (
    <img className='w-8'
      src={theme === "dark" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
      alt="ThemeSwitecher"
      onClick={ThemeSwitcher}
    />
    
  );
}

export default ThemeBtn