import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MuvieApp from './MuvieApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<MuvieApp></MuvieApp>
  </StrictMode>,
)
