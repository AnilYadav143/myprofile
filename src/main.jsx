import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
root.render(
  <BrowserRouter basename="/my-portfolio"> {/* Add basename here */}
    <App />
  </BrowserRouter>
);
