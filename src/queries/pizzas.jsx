/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query'
import api from '../api'
import { useAppContext } from '../components/AppContext'

export function usePizzasGet(options) {
  const { isInitialized } = useAppContext()

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
