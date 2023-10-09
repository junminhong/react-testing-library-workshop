import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
