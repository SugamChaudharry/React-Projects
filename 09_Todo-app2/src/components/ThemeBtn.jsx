import React from 'react'
import { ThemeSwitcher } from '../featuers/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

function ThemeBtn() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.themes);

    const handleThemeSwitch = () => {
      dispatch(ThemeSwitcher());
    };
  return (
    <img
      className="w-8 cursor-pointer"
      src={theme === "dark" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
      alt="ThemeSwitecher"
      onClick={handleThemeSwitch}
    />
  );
}

export default ThemeBtn