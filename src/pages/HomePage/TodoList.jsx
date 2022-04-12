import { Box, CircularProgress, Skeleton } from '@mui/material'
import { useTodosGet } from '../../queries/todos'
import { useHomePageContext } from './HomePageContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { search, sort, page, pageSize } = useHomePageContext()

  const { isLoading, data: todos } = useTodosGet({
    search,
    sort,
    page,
    pageSize,
    // onError: error => {
    //   enqueueSnackbar(error.message, { variant: 'error' })
    // },
  })

  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', p: 2 }}>
      {isLoading &&
        [...Array(4)].map((_, i) => (
          <Skeleton key={i} height="74px" width="100%" variant="rect" />
        ))}
      {todos?.map(todoItem => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
    </Box>
  )
}
