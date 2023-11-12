import React , {useEffect} from 'react'
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
      src={theme === "dark" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
      alt="ThemeSwitecher"
      onClick={ThemeSwitcher || theme === "dark"}
    />
  );
}

export default ThemeBtn