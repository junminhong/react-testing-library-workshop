import { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount((prevCount) => prevCount + 1)
  return { count, increment }
}

export default useCounter