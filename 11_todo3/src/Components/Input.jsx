import React from 'react'

function Input() {

  const handleSubmit = (event) => {
    event.preventDefault(); 

    console.log('Form submitted!');
  };

  return (
    <div className=" w-[30%] h-[70%] absolute top-[20%] left-[35%] inputBg animate-jump-in flex flex-col items-center ">
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center">
        <span className="font-bold text-4xl text-slate-500 capitalize pb-5">HEADING</span>
        <div className="w-full h-[20%] flex justify-center">
          <input type="text" className="input w-[80%] h-[70px]" />
        </div>

        <span className="font-bold text-4xl text-slate-500 pb-5">TODO</span>
        <div className="w-full h-[14rem] flex justify-center pb-5">
          <textarea className="resize-none max-h-[14rem] w-[80%] bg-transparent input tracking-[2px] "></textarea>
        </div>
        <button
          type="submit"
          title="Add New"
          class="group cursor-pointer outline-none hover:rotate-90 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            class="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300">
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input