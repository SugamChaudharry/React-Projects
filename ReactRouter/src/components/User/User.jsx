import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div className="w-full h-96  flex items-center justify-center  bg-slate-700 ">
      <h1 className="text-rose-600 hover:text-rose-500 font-bold text-9xl">
        User : {userid}
      </h1>
    </div>
  );
}

export default User;
