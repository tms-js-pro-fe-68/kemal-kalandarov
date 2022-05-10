import { useParams } from 'react-router-dom'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import { usePizzaGet } from '../../queries/pizzas'

export default function PizzaPage() {
  const { id } = useParams()
  const { data: pizza = [] } = usePizzaGet({ id })

  return (
    <Page>
      <AppBar title="Products" />
      <main style={{ color: 'white' }}>
        <h1 className="title">{pizza.name} Pizza</h1>
        <img
          component="img"
          height="194"
          src={pizza.imageUrl}
          alt="Paella dish"
        />
        <div>
          <div>
            <span>{pizza.name}</span>
            <span>BYN {pizza.price}</span>
          </div>
          <span>{pizza.description}</span>
        </div>
        <div disableSpacing>
          <button>like ({pizza.likesCount} likes)</button>
          <button>share</button>
          <button>order</button>
        </div>
      </main>
    </Page>
  )
}
