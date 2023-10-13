import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  
  const addTodo = () => {
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input 
        data-testid="todo-input"
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button data-testid="add-btn" onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoList
