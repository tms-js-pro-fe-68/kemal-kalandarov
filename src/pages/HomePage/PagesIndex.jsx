import { Button, Stack } from '@mui/material'

export default function PagesIndex({ page, setPage }) {
  return (
    <Stack direction="row" sx={{ justifyContent: 'center', width: 1, py: 3 }}>
      <Stack direction="row" spacing={1}>
        {[1, 2, 3, 4].map(p => (
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
  )
}
