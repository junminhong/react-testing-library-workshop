import { useEffect } from 'react'

const useDocumentTitle = (title = '') => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'react testing library'
    }
  }, [title])
}

export default useDocumentTitle