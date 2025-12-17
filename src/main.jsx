import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App.jsx'
import { Catalogo } from './Catalogo.jsx'

createRoot(document.getElementById('app')).render(
    <App />
)