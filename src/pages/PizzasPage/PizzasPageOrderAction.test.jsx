import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import PizzasPageOrderAction from './PizzasPageOrderAction'

let mockCart
let mockSetCart

beforeEach(() => {
  mockCart = {}
  mockSetCart = jest.fn(fn => fn({}))
})

afterEach(jest.clearAllMocks)

jest.mock('../../components/AppContext', () => ({
  useAppContext: () => ({
    cart: mockCart,
    setCart: mockSetCart,
  }),
}))

describe('PizzasPageOrderAction', () => {
  it('should render without crashes', () => {
    const { getByTestId } = render(<PizzasPageOrderAction />)

    expect(getByTestId('order-button')).toBeInTheDocument()
  })

  // AAA
  it('should call setCart on order click', () => {
    // arrange - подготовить
    const { getByTestId } = render(<PizzasPageOrderAction id="testId" />)

    // act - произвести действие
    const orderButton = getByTestId('order-button')
    fireEvent.click(orderButton)

    // assert - проверить результат
    expect(mockSetCart).toReturnWith({ testId: 1 })
  })

  it('should render - 10 +', () => {
    mockCart = { testId: 10 }
    const { debug, getByTestId, getByText } = render(
      <PizzasPageOrderAction id="testId" />,
    )
    debug()

    // container.querySelector(".Mui-input-base")

    expect(getByTestId('minus-button')).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
    expect(getByText('+')).toBeInTheDocument()
  })

  it('should call setCart on - click', () => {
    mockCart = { testId: 1 }
    mockSetCart = jest.fn(fn => fn({ testId: 1 }))
    const { getByText } = render(<PizzasPageOrderAction id="testId" />)

    const minusButton = getByText('-')
    fireEvent.click(minusButton)

    expect(mockSetCart).toReturnWith({ testId: 0 })
  })

  it('should call setCart on + click', () => {
    mockCart = { testId: 1 }
    mockSetCart = jest.fn(fn => fn({ testId: 1 }))
    const { getByText } = render(<PizzasPageOrderAction id="testId" />)

    const plusButton = getByText('+')
    fireEvent.click(plusButton)

    expect(mockSetCart).toReturnWith({ testId: 2 })
  })
})
