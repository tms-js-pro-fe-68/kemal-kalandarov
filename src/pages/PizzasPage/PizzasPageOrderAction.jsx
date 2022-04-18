import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useAppContext } from '../../components/AppContext'

export default function PizzasPageOrderAction({ id }) {
  const { cart, setCart } = useAppContext()

  return (
    <Box ml="auto">
      {!cart[id] && (
        <Button
          data-testid="order-button"
          variant="contained"
          onClick={() =>
            setCart(prevCart => ({
              ...prevCart,
              [id]: (prevCart[id] ?? 0) + 1,
            }))
          }
        >
          order
        </Button>
      )}
      {cart[id] > 0 && (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            data-testid="minus-button"
            onClick={() =>
              setCart(prevCart => ({
                ...prevCart,
                [id]: prevCart[id] - 1,
              }))
            }
          >
            -
          </Button>
          <Button disabled sx={{ color: 'black !important' }}>
            {cart[id]}
          </Button>
          <Button
            onClick={() =>
              setCart(prevCart => ({
                ...prevCart,
                [id]: prevCart[id] + 1,
              }))
            }
          >
            +
          </Button>
        </ButtonGroup>
      )}
    </Box>
  )
}
