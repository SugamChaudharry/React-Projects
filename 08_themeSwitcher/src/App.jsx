import { useState , useEffect } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/themeBtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState('light')

    const lightTheme =( )=>{
      setThemeMode("light");
    }
    const darkTheme =( )=>{
      setThemeMode("dark");
    }

    useEffect(() => {
      const htmlEl = document.querySelector('html')
      htmlEl.classList.remove('light','dark');
      htmlEl.classList.add(themeMode)
    }, [themeMode])
    
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center text-center dark:bg-gray-800">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
