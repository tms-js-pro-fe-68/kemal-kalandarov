import { Box } from '@mui/material'

export default function ClickBoundary(props) {
  return <Box {...props} onClick={(e) => e.stopPropagation()} />
}
