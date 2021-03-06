/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query'
import api from '../api'
import { useAppContext } from '../components/AppContext'

export function useTodosGet({ search, sort, page, pageSize, ...options }) {
  const { isInitialized } = useAppContext()

  const getTodos = async () => {
    const result = await api.get(`/todos`, {
      params: {
        search,
        sortField: 'description',
        sortOrder: sort,
        offset: (page - 1) * pageSize,
        limit: pageSize,
      },
    })
    return result.data
  }

  return useQuery(['todos', search, sort, page, pageSize], getTodos, {
    ...options,
    enabled: isInitialized,
  })
}
