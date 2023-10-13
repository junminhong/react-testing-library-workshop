import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button data-testid="increment-btn" onClick={() => setCount(count + 1)}>Increment</button>
      <button data-testid="decrement-btn" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
