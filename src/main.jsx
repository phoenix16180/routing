import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* Use BrowserRouter to enable routing */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
