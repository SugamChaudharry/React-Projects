import { useState } from 'react';
import AddCloseBtn from './AddCloseBtn';

const Foreground = () => {

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[3] ">
      <AddCloseBtn/>
    </div>
  );
};

export default Foreground;
