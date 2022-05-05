import { useState } from 'react'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import TodoList from './TodoList'
import HomePageListActions from './HomePageListActions'
import PagesIndex from './PagesIndex'

export default function HomePageRedux() {
  const [page, setPage] = useState(1)

  return (
    <Page>
      <AppBar title="Home page redux" />
      <HomePageListActions />
      <TodoList />
      <PagesIndex {...{ page, setPage }} />
    </Page>
  )
}
