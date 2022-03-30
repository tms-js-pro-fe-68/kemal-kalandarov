import { Button, Stack, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import AddTodoItemButton from './AddTodoItemButton'
import TodoList from './TodoList'
import api from '../../api'

const PAGE_SIZE = 10

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('asc')
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)

  const loadTodos = (description, currentSort, currentPage) => {
    api
      .get(`/todos`, {
        params: {
          description,
          sort: currentSort,
          page: currentPage,
          pageSize: PAGE_SIZE,
        },
      })
      .then(({ data }) => setTodos(data))
  }

  useEffect(() => {
    loadTodos(search, sort, page)
  }, [search, sort, page])

  return (
    <Page>
      <AppBar />
      <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button
        onClick={() =>
          setSort((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'))
        }
      >
        {sort}
      </Button>
      <TodoList {...{ todos, loadTodos }} />
      <Stack direction="row" sx={{ justifyContent: 'center', width: 1, p: 3 }}>
        <Stack direction="row" spacing={1}>
          {[1, 2, 3, 4].map((p) => (
            <Button
              key={p}
              variant={p === page ? 'contained' : 'outlined'}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          ))}
        </Stack>
      </Stack>
      <AddTodoItemButton onAfterSubmit={loadTodos} />
    </Page>
  )
}
