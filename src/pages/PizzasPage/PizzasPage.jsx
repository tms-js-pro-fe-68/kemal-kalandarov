import { useState } from 'react'
import {
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@mui/icons-material'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import { usePizzasGet } from '../../queries/pizzas'
import CartButton from './CartButton'
import PizzasPageOrderAction from './PizzasPageOrderAction'
import { useAppContext } from '../../components/AppContext'
import ClickBoundary from '../../components/ClickBoundary'
import PizzaDialog from './PizzaDialog'

export default function PizzasPage() {
  const { data: pizzas = [] } = usePizzasGet()

  const { cart } = useAppContext()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Page>
      <AppBar title="Products" />
      <button type="button" onClick={() => setIsOpen(true)}>
        add
      </button>
      <PizzaDialog open={isOpen} onClose={() => setIsOpen(false)} />
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
        {pizzas.map(pizza => (
          <Link key={pizza.id} to={`/pizzas/${pizza.id}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image={pizza.imageUrl}
                alt="Paella dish"
              />
              <CardContent>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                    {pizza.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    BYN {pizza.price}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {pizza.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ClickBoundary>
                  <IconButton aria-label="add to favorites">
                    <Badge badgeContent={pizza.likesCount} color="primary">
                      <FavoriteIcon
                        sx={{ color: pizza.likesCount ? 'red' : undefined }}
                      />
                    </Badge>
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <PizzasPageOrderAction id={pizza.id} />
                </ClickBoundary>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
      <CartButton />
      {JSON.stringify(cart)}
    </Page>
  )
}
