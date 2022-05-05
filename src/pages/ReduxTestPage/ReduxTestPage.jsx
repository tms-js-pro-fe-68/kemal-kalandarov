import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../../actions/count'
import { pushSushiItems } from '../../actions/sushiList'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'

export default function ReduxTestPage() {
  const [num, setNum] = useState('')

  const count = useSelector(store => store.count)
  const sushiList = useSelector(store => store.sushiList)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addAction(+num))
  }

  const handleNewItemClick = () => {
    dispatch(
      pushSushiItems([
        { name: 'california' },
        { name: 'filadelfia' },
        { name: 'spicy kunsei maki' },
        { name: 'karai maki' },
      ]),
    )
  }

  return (
    <Page className="justify-center items-center">
      <AppBar title="Redux Test Page" />
      <Box sx={{ display: 'grid', gap: 2, p: 5 }}>
        <TextField value={num} onChange={e => setNum(e.target.value)} />
        <Button variant="contained" onClick={handleClick}>
          increment count: {count}
        </Button>
        <Button variant="contained" onClick={handleNewItemClick}>
          add sushi items
        </Button>
        {JSON.stringify(sushiList)}
      </Box>
    </Page>
  )
}
