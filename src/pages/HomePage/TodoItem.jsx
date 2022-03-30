import { Checkbox, IconButton, Paper, Stack, Typography } from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import ConfirmDialog from '../../components/ConfirmDialog'
import ClickBoundary from '../../components/ClickBoundary'
import TodoItemEditor from './TodoItemEditor'

export default function TodoItem({ id, done, description, onChange }) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const openEdit = () => setIsEditOpen(true)

  const [isDone, setIsDone] = useState(done)

  useEffect(() => {
    setIsDone(done)
  }, [done])

  const handleClick = async () => {
    setIsDone((prevIsDone) => {
      fetch(`https://tms-js-pro-back-end.herokuapp.com/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${sessionStorage.token}`,
        },
        body: JSON.stringify({ done: !prevIsDone }),
      })

      return !prevIsDone
    })

    onChange()
  }

  const handleDelete = async () => {
    await fetch(`https://tms-js-pro-back-end.herokuapp.com/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.token}`,
      },
    })

    onChange()
  }

  const [isDeleteConfirmDialogOpen, setIsDeleteConfirmDialogOpen] =
    useState(false)
  const handleDeleteConfirmOpen = () => setIsDeleteConfirmDialogOpen(true)
  const handleDeleteConfirmClose = () => setIsDeleteConfirmDialogOpen(false)

  return (
    <>
      <Paper onClick={handleClick} sx={{ p: 2, pl: 3 }}>
        <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
          <Checkbox edge="start" checked={isDone} tabIndex={-1} disableRipple />
          <Typography sx={{ flex: 1 }}>{description}</Typography>
          <ClickBoundary>
            <Stack direction="row" spacing={3}>
              <IconButton edge="end" onClick={openEdit}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={handleDeleteConfirmOpen}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </ClickBoundary>
        </Stack>
      </Paper>
      <TodoItemEditor
        id={id}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onAfterSubmit={onChange}
      />
      <ConfirmDialog
        title="Delete TODO item"
        text="Are you sure?"
        open={isDeleteConfirmDialogOpen}
        onConfirm={handleDelete}
        onClose={handleDeleteConfirmClose}
      />
    </>
  )
}
