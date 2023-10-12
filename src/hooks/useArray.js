import { useState } from 'react'

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    setValue,
    add: (a) => setValue((v) => [...v, a]),
    clear: () => setValue(() => []),
    removeById: (id) => setValue((arr) => arr.filter((v) => v && v.id !== id)),
    removeIndex: (index) => setValue((v) => [...v.slice(0, index), ...v.slice(index + 1)]),
  }
}

export default useArray