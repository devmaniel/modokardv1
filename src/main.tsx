import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// style
import "./style/App.css";
import './style/index.css'

// Supports weights 100-900
import '@fontsource-variable/outfit';


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
