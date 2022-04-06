import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
