import { useState } from "react";
import Input from "./Input";

function AddCloseBtn() {
  const [change, setChange] = useState(false);
  const [show, setShow] = useState(false);

  function changing() {
    setChange(!change);
    setShow(!show);
  }

  return (
    <div>
        <img
        src="/plus.png"
        alt="png"
        className={`w-20 absolute left-[46%] top-10 ease-in duration-300 transform ${change && `rotate-45`}`}
        onClick={changing}
        />
        {show && (
            <Input />
        )}
    </div>
  );
}

export default AddCloseBtn;
