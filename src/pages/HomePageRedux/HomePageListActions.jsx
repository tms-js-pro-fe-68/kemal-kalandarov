import { Stack, TextField, Button } from '@mui/material'

export default function HomePageListActions() {
  const { search, setSearch, sort, setSort } = {}

  const handleSearchChange = e => setSearch(e.target.value)
  const handleSortClick = () => {
    setSort(prevSort => (prevSort === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <Stack direction="row" spacing={2} p={2}>
      <TextField fullWidth value={search} onChange={handleSearchChange} />
      <Button onClick={handleSortClick}>{sort}</Button>
    </Stack>
  )
}
