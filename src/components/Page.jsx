import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
        ...sx,
      }}
      {...otherProps}
    />
  )
}
