import { useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@mui/icons-material'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'

const productsList = [
  {
    name: 'test 1',
    description:
      ' sdchjbsd cshjdbc s djh cjhs dcjh sjhd cjhs djhc sjdch sjhd cj',
    price: 24,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._QSGAZEOh9CcZwtpbtFToAHaFj%26pid%3DApi&f=1',
  },
  {
    name: 'test 2',
    description:
      ' sdchjbsd cshjdbc s djh cjhs dcjh sjhd cjhs djhc sjdch sjhd cj',
    price: 30,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.r1nt7lANWaGvIbtB-M0o2gHaGK%26pid%3DApi&f=1',
  },
  {
    name: 'test 3',
    description:
      ' sdchjbsd cshjdbc s djh cjhs dcjh sjhd cjhs djhc sjdch sjhd cj',
    price: 45,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qg1Hz5GmiFY0h_5e1lLbkAHaHa%26pid%3DApi&f=1',
  },
  {
    name: 'test 3',
    description:
      ' sdchjbsd cshjdbc s djh cjhs dcjh sjhd cjhs djhc sjdch sjhd cj',
    price: 50,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ATYCiV7ZIaUb3hbsw9YkVwHaHa%26pid%3DApi&f=1',
  },
]

function OrderAction() {
  const [count, setCount] = useState(0)

  return (
    <Box ml="auto">
      {count === 0 && (
        <Button variant="contained" onClick={() => setCount(c => c + 1)}>
          order
        </Button>
      )}
      {count > 0 && (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => setCount(c => c - 1)}>-</Button>
          <Button disabled sx={{ color: 'black !important' }}>
            {count}
          </Button>
          <Button onClick={() => setCount(c => c + 1)}>+</Button>
        </ButtonGroup>
      )}
    </Box>
  )
}

export default function ProductsPage() {
  return (
    <Page>
      <AppBar title="Products" />
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gap: 2,
          width: 1,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          color: 'white',
        }}
      >
        {productsList.map(item => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={item.image}
              alt="Paella dish"
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ fontWeight: 'bold' }}
                >
                  BYN {item.price}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <OrderAction />
            </CardActions>
          </Card>
        ))}
      </Box>
    </Page>
  )
}
