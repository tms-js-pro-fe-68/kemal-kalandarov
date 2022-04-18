import { Badge, Fab, IconButton } from '@mui/material'
import { ShoppingCart as CartIcon } from '@mui/icons-material'
import { useState } from 'react'
// import TodoItemEditor from './TodoItemEditor'

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)

  return (
    <>
      <IconButton
        // size="60"
        color="primary"
        sx={{ position: 'fixed', bottom: 24, right: 24, width: 80, height: 80 }}
        onClick={open}
      >
        <Badge badgeContent={4} color="secondary">
          <CartIcon fontSize="60px" />
        </Badge>
      </IconButton>
      {/* <TodoItemEditor
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onAfterSubmit={onAfterSubmit}
      /> */}
    </>
  )
}
