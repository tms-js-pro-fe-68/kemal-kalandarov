import { useState } from 'react'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import AddTodoItemButton from './AddTodoItemButton'
import TodoList from './TodoList'
import HomePageListActions from './HomePageListActions'
import PagesIndex from './PagesIndex'
import HomePageContextProvider from './HomePageContext'
import { useTodosGet } from '../../queries/todos'
import { Typography } from '@mui/material'
import { useSnackbar } from 'notistack'

const PAGE_SIZE = 10

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('ASC')
  const [page, setPage] = useState(1)

  // const { enqueueSnackbar } = useSnackbar()

  // const { isLoading, data: todos } = useTodosGet({
  //   search,
  //   sort,
  //   page,
  //   pageSize: PAGE_SIZE,
  //   onError: error => {
  //     enqueueSnackbar(error.message, { variant: 'error' })
  //   },
  // })

  return (
    <HomePageContextProvider
      context={{
        search,
        setSearch,
        sort,
        setSort,
        // todos,
        page,
        setPage,
        pageSize: PAGE_SIZE,
        loadTodos: () => {},
        // isLoading,
      }}
    >
      <Page>
        <AppBar title="Home page" />
        <HomePageListActions />
        <TodoList />
        <PagesIndex {...{ page, setPage }} />
        <AddTodoItemButton onAfterSubmit={() => {}} />
      </Page>
    </HomePageContextProvider>
  )
}
