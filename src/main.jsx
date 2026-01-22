import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DesplayUsers from './TP_AJAX.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DesplayUsers />
  </StrictMode>,
)
