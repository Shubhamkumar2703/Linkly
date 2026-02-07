import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { StoreProvider } from './contextApi/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <App />
      <Toaster position="top-center" />
    </StoreProvider>
  </StrictMode>,
)
