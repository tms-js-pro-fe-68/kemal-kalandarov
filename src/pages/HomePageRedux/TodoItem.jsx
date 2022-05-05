import { Checkbox, IconButton, Paper, Stack, Typography } from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useSelector } from 'react-redux'

export default function TodoItem({ id }) {
  const itemsById = useSelector(store => store.todos.items.byId)
  const { done, description } = itemsById[id]

  return (
    <Paper sx={{ p: 2, pl: 3 }}>
      <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
        <Checkbox edge="start" checked={done} tabIndex={-1} disableRipple />
        <Typography sx={{ flex: 1 }}>{description}</Typography>
        <Stack direction="row" spacing={3}>
          <IconButton edge="end">
            <EditIcon />
          </IconButton>
          <IconButton edge="end">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  )
}
