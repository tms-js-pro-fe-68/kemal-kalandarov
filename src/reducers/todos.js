import { PUSH_TODO_ITEMS, SET_TODO_SEARCH } from '../actions/todos'

const defaultState = {
  items: {
    ids: [],
    byId: {},
  },
  search: '',
  page: 1,
  sort: 'ASC',
  pageSize: 20,
}

export default function count(state = defaultState, action) {
  switch (action.type) {
    case PUSH_TODO_ITEMS:
      return {
        ...state,
        items: {
          ids: [...state.items.ids, ...action.items.map(item => item.id)],
          byId: {
            ...state.items.byId,
            ...action.items.reduce(
              (itemsObj, item) => ({
                ...itemsObj,
                [item.id]: item,
              }),
              {},
            ),
          },
        },
      }
    case SET_TODO_SEARCH:
      return {
        ...state,
        search: action.search,
      }
    default:
      return state
  }
}
