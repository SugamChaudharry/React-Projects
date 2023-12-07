import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-gray-800'>
        <h1 className='text-white font-bold text-xl'>Docs project</h1>
      </div>
    </>
  )
}

export default App
