import { useState, useCallback, useEffect, useRef } from "react";

import "./app.css";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-={}[]|;:,.<>?/`'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

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
            type="text"
            value={password}
            ref={passwordRef}
            className="rounded-l-lg outline-none h-10 text-2xl font-semibold pl-4 text-gray-500 hover:bg-slate-300"
            placeholder="PASSWORD"
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className=" w-2/12 pt-2 pb-4 bg-cyan-600 h-10 rounded-r-lg font-semibold  text-slate-50 text-xl hover:bg-cyan-900">
            COPY
          </button>
        </div>
        {/* length section */}
        <div>
          <label className=" text-orange-300 font-mono text-xl m-4" htmlFor="inputRange ">
            Length ( {length} ) :
          </label>
          <input
            type="range"
            min={0}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          {/* number section */}
          <label className=" text-orange-300 font-mono text-xl m-4" htmlFor="inputRange ">
            Numbers :
          </label>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
            className="cursor-pointer"
          />
          {/* sp char section */}
          <label className=" text-orange-300 font-mono text-xl m-4" htmlFor="inputRange ">
            special characters :
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
