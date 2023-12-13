import React from 'react'
import { motion } from "framer-motion";

function Card({refrance, todo}) {
  return (
    <motion.div drag dragConstraints={refrance} className='w-60 h-72 rounded-[20px] bg-rose-300'>
      <div className='w-full h-1/3 bg-rose-500 rounded-t-[20px]'>
        <h2>
          {todo.title}
        </h2>
      </div>
      <div className='w-full h-2/3 bg-rose-400 rounded-b-[20px]'>
        <p>
          {todo.discription}
        </p>
      </div>
    </motion.div>
  )
}

export default Card