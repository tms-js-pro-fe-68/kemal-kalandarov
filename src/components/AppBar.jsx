import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AppBar({ title }) {
  const ref = useRef()

  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (event) => setAnchorEl(event.target)

  const handleCloseMenu = () => setAnchorEl(null)

  const handleLogout = () => {
    sessionStorage.token = ''
    sessionStorage.email = ''
    navigate('/login', { replace: true })
    handleCloseMenu()
  }

  return (
    <>
      <MuiAppBar position="fixed">
        <Toolbar>
          <Typography
            {...{ ref }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, width: 200 }}
          >
            {title}
          </Typography>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <Box sx={{ minHeight: { xs: 56, sm: 64 } }} />
    </>
  )
}
