import { createContext, useContext, useEffect } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { setRandomColour } from '../App'

const Context = createContext()

export const usePageContext = () => useContext(Context)

export default function Page({ sx, ...otherProps }) {
  const navigate = useNavigate()

  const navigateToLogin = () => navigate('/login', { replace: true })

  useEffect(() => {
    if (!sessionStorage.token) navigateToLogin()
  }, [])

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        // bgcolor: setRandomColour(),
        ...sx,
      }}
      {...otherProps}
    />
  )
}
