/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import api from '../api'
// import { useAppContext } from '../components/AppContext'

export function usePizzasGet(options) {
  const isInitialized = useSelector(store => store.isInitialized)

  return useQuery(
    ['pizzas'],
    async () => {
      const result = await api.get(`/pizzas`)
      return result.data
    },
    {
      ...options,
      enabled: isInitialized,
    },
  )
}

export function usePizzaGet(options) {
  const isInitialized = useSelector(store => store.isInitialized)

  return useQuery(
    ['pizza'],
    async () => {
      const result = await api.get(`/pizzas/${options.id}`)
      return result.data
    },
    {
      ...options,
      enabled: isInitialized,
    },
  )
}
