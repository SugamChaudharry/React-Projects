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
    const mystyle = {
      background: "linear-gradient(40deg,#ff0080,#ff8c00 70%)",
      height: "var(1.4em,1.4em)",
      width: "var(1.4em,1.4em)",
    };
  return (
    <img
      src={theme === "dark" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
      alt="ThemeSwitecher"
      onClick={ThemeSwitcher || theme === "dark"}
    />
    
  );
}

export default ThemeBtn