import { Box } from '@mui/material'
import TodoItem from './TodoItem'

export default function TodoList({ todos, loadTodos }) {
  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', p: 2 }}>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} onChange={loadTodos} />
      ))}
    </Box>
  )
}
