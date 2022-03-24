import {
  Checkbox,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Page from '../components/Page'
import ConfirmDialog from '../components/ConfirmDialog'

export default function HomePage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then(setTodos)
  }, [])

  const handleItemClick = (id) => () => {
    console.log(id)
  }

  const [isDeleteConfirmDialogOpen, setIsDeleteConfirmDialogOpen] =
    useState(false)

  const handleDeleteConfirmOpen = (id) => () =>
    setIsDeleteConfirmDialogOpen(true)
  const handleDeleteConfirmClose = () => setIsDeleteConfirmDialogOpen(false)

  return (
    <Page>
      <AppBar />

      <List sx={{ p: 2 }}>
        {[...todos, ...todos, ...todos, ...todos].map((todoItem) => (
          <ListItem
            key={todoItem.id}
            secondaryAction={
              <Stack direction="row" spacing={3}>
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={handleDeleteConfirmOpen(todoItem.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleItemClick(todoItem.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todoItem.done}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={todoItem.description} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Fab color="primary" sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <AddIcon />
      </Fab>
      <ConfirmDialog
        title="Delete TODO item"
        text="Are you sure?"
        open={isDeleteConfirmDialogOpen}
        onClose={handleDeleteConfirmClose}
      />
    </Page>
  )
}
