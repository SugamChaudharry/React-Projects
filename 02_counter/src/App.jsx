import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increment(opration) {
    count = count >= 20 ? count : count + 1;
    setCount(count);
  }
  function decrement(opration) {
    count = (count <= 0)?count:count-1;
    setCount(count)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+</button><button onClick={decrement}>-</button>
    </>
  )
}

export default App
