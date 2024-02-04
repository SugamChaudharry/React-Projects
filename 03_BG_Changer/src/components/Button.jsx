import React from 'react'

function Button() {
  return (
    <button
        onClick={() => setColor("bg-red-500")}
        className="outline-none shadow-lg bg-red-500 px-3 py-2 rounded-3xl">
        red
    </button>
  )
}

export default Button