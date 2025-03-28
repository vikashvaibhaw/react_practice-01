import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css' 
import ReApp from './ReApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReApp />
  </StrictMode>,
)
