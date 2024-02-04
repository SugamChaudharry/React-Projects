import { useState } from "react";


function BGChanger() {
  let [color, setColor] = useState("olive");

  const rgb = ["bg-red-500", "bg-slate-500", "bg-orange-500" , "bg-green-500" , "bg-emerald-500" , "bg-teal-500" , "bg-cyan-500" , "bg-sky-500" , "bg-indigo-500" , "bg-violet-500" , "bg-purple-500" , "bg-fuchsia-500" , "bg-pink-500" , "bg-rose-500"]; 

  function RGBLIGHT() {
    rgb.forEach(() => {
      setInterval(() => {
        color = rgb[Math.floor(Math.random() * rgb.length)];
        setColor(color);
      }, 100);
    });
  }

  const classes = `w-full h-screen duration-200  ${color}`;
  
  return (
    <div className={classes}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button
        onClick={() => RGBLIGHT()}
        className="border-4 border-cyan-400 justify-center shadow-lg bg-transparent px-3 py-2 rounded-3xl ">
          RGB effict
        </button>
        <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("bg-red-500")}
            className="outline-none shadow-lg bg-red-500 px-3 py-2 rounded-3xl">
            red
          </button>
          <button
            onClick={() => setColor("bg-slate-500")}
            className="outline-none shadow-lg bg-slate-500 px-3 py-2 rounded-3xl">
            slate
          </button>
          <button
            onClick={() => setColor("bg-orange-500")}
            className="outline-none shadow-lg bg-orange-500 px-3 py-2 rounded-3xl">
            orange
          </button>
          <button
            onClick={() => setColor("bg-green-500")}
            className="outline-none shadow-lg bg-green-500 px-3 py-2 rounded-3xl">
            green
          </button>
          <button
            onClick={() => setColor("bg-emerald-500")}
            className="outline-none shadow-lg bg-emerald-500 px-3 py-2 rounded-3xl">
            emerald
          </button>
          <button
            onClick={() => setColor("bg-teal-500")}
            className="outline-none shadow-lg bg-teal-500 px-3 py-2 rounded-3xl">
            teal
          </button>
          <button
            onClick={() => setColor("bg-cyan-500")}
            className="outline-none shadow-lg bg-cyan-500 px-3 py-2 rounded-3xl">
            cyan
          </button>
          <button
            onClick={() => setColor("bg-sky-500")}
            className="outline-none shadow-lg bg-sky-500 px-3 py-2 rounded-3xl">
            sky
          </button>
          <button
            onClick={() => setColor("bg-indigo-500")}
            className="outline-none shadow-lg bg-indigo-500 px-3 py-2 rounded-3xl">
            indigo
          </button>
          <button
            onClick={() => setColor("bg-violet-500")}
            className="outline-none shadow-lg bg-violet-500 px-3 py-2 rounded-3xl">
            violet
          </button>
          <button
            onClick={() => setColor("bg-purple-500")}
            className="outline-none shadow-lg bg-purple-500 px-3 py-2 rounded-3xl">
            purple
          </button>
          <button
            onClick={() => setColor("bg-fuchsia-500")}
            className="outline-none shadow-lg bg-fuchsia-500 px-3 py-2 rounded-3xl">
            fuchsia
          </button>
          <button
            onClick={() => setColor("bg-pink-500")}
            className="outline-none shadow-lg bg-pink-500 px-3 py-2 rounded-3xl">
            pink
          </button>
          <button
            onClick={() => setColor("bg-rose-500")}
            className="outline-none shadow-lg bg-rose-500 px-3 py-2 rounded-3xl">
            rose
          </button>
        </div>
      </div>
    </div>
  );

}
export default BGChanger;
