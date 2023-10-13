import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  
  useEffect(() => {
    let interval
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive])
  
  return (
    <div>
      <p data-testid="result">{seconds}s</p>
      <button data-testid="trigger-btn" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button data-testid="reset-btn" onClick={() => setSeconds(0)}>Reset</button>
    </div>
  )
}

export default Timer