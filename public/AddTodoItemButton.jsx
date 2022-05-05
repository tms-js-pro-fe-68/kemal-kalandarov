import { Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useReducer, useState } from 'react'
import TodoItemEditor from './TodoItemEditor'

export default function AddTodoItemButton({ onAfterSubmit }) {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)

  return (
    <>
      <Fab
        color="secondary"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        onClick={open}
      >
        <AddIcon />
      </Fab>
      <TodoItemEditor
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onAfterSubmit={onAfterSubmit}
      />
    </>
  )
}
