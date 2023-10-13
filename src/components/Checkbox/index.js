import React, { useState } from 'react'

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false)

  return (
    <label>
      <input
        data-testid="checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {label}
    </label>
  )
}

export default Checkbox
