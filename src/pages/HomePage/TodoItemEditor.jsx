import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useHomePageContext } from './HomePageContext'

export default function TodoItemEditor({ id, onClose, ...otherProps }) {
  const { loadTodos } = useHomePageContext()

  const [description, setDescription] = useState('')

  const loadTodo = () => {
    fetch(`https://tms-js-pro-back-end.herokuapp.com/api/todos/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.token}`,
      },
    })
      .then(response => response.json())
      .then(data => setDescription(data.description))
  }

  useEffect(() => {
    if (!id) return
    loadTodo()
  }, [])

  const modifyTodo = async () => {
    const slashIdOrEmpty = id ? `/${id}` : ''
    await fetch(
      `https://tms-js-pro-back-end.herokuapp.com/api/todos${slashIdOrEmpty}`,
      {
        method: id ? 'PUT' : 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${sessionStorage.token}`,
        },
        body: JSON.stringify({ description }),
      },
    )
    loadTodos()
    onClose()
  }

  return (
    <Dialog {...{ onClose, ...otherProps }}>
      <DialogTitle>{id ? 'Edit' : 'Add'} todo</DialogTitle>
      <DialogContent>
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={modifyTodo} autoFocus variant="contained">
          {id ? 'Edit' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
