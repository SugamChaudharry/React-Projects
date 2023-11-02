import { useState, useCallback } from "react";

import "./app.css";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumber] = useState(false);
  const [charAllow, setChar] = useState(true);
  const [Password, setPassword] = useState("");
  useCallback(
    () => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllow) {
      if(numberAllow) str = str + "0123456789"
      if(charAllow) str = str + "!@#$%^&*()_+-={}[]|;:,.<>?/`'"
      for (let i = 1; i <= array.length; i++) {
        let char = Math.floor(Math.random()*str.length)
        pass = str.charAt(char)
      }
      setPassword(str)
    }
    },
    [length,numberAllow,charAllow,setPassword],
  )
  
  return (
    <div className="w-full h-full bg-gray-900 flex justify-center items-center ">
      <div className="w-6/12 h-3/6 flex flex-col items-center bg-gray-800 rounded-3xl ">
        <h1 className="text-gray-300 font-bold font-mono text-5xl m-10">Password genrator</h1>
{/* password section */}
        <div className="w-5/6 mb-20 mt-10">
          <label className="text-gray-400 font-mono text-3xl pb-3 " htmlFor="input">
            Password :
          </label>
          <input
            className="rounded-l-lg  h-10 text-2xl font-semibold pl-4 text-gray-500 hover:bg-slate-300"
            type="text"
            id="input"
            placeholder="PASSWORD"
            />
          <button className=" w-2/12 pt-2 pb-4 bg-cyan-600 h-10 rounded-r-lg font-semibold  text-slate-50 text-xl hover:bg-cyan-900">
            COPY
          </button>
        </div>
{/* length section */}
        <div>
          <label className=" text-orange-300 font-mono text-xl m-4" htmlFor="inputRange ">
            Length ({length}) :
          </label>
          <input type="range" id="inputRange" />
{/* number section */}
          <label className=" text-orange-300 font-mono text-xl m-4" htmlFor="inputRange ">
            Numbers :
          </label>
          <input type="checkbox" id="inputRange" />
{/* sp char section */}
          <label className=" text-orange-300 font-mono text-xl m-4" htmlFor="inputRange ">
            special characters :
          </label>
          <input type="checkbox" id="inputRange" className="" />
        </div>
      </div>
    </div>
  );
}

export default App;
