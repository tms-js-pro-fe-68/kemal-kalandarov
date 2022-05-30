import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import App from './App'
import theme from './theme'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
)
