export const PUSH_TODO_ITEMS = 'PUSH_TODO_ITEMS'
export const SET_TODO_SEARCH = 'SET_TODO_SEARCH'

export const pushTodoItems = items => ({
  type: PUSH_TODO_ITEMS,
  items,
})

export const setTodoSearch = search => ({
  type: SET_TODO_SEARCH,
  search,
})
