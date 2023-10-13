import React, { useState } from 'react'

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <div>
      <p data-testid="result">{isOn ? 'ON' : 'OFF'}</p>
      <button data-testid="toggle-btn" onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  )
}

export default ToggleSwitch