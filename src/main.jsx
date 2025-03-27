import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <script src="https://www.google.com/recaptcha/api.js?render=6LdL_OgqAAAAAA7CeJ1uaHxubVmsr22H1OvP5iQJ"></script>
  </StrictMode>,
)
