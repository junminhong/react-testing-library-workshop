import React from 'react'

const Button = ({onClick, text}) => {
  return(
    <button 
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      {text}
    </button>
  )
}

export default Button