import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushTodoItems } from '../../actions/todos'
import api from '../../api'
import TodoItem from './TodoItem'

export default function TodoList() {
  const {
    todos: { search, sort, page, pageSize, items },
    isInitialized,
  } = useSelector(state => ({
    todos: state.todos,
    isInitialized: state.isInitialized,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isInitialized) return

    dispatch({ type: 'FETCH_TODOS' })
    // api
    //   .get(`/todos`, {
    //     params: {
    //       search,
    //       sortField: 'description',
    //       sortOrder: sort,
    //       offset: (page - 1) * pageSize,
    //       limit: pageSize,
    //     },
    //   })
    //   .then(response => dispatch(pushTodoItems(response.data)))
  }, [isInitialized, search])

  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', p: 2 }}>
      {items.ids?.map(id => (
        <TodoItem key={id} id={id} />
      ))}
    </Box>
  )
}
