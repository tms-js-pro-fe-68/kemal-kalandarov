import { PUSH_ITEMS, SET_TOTAL_COUNT } from '../actions/sushiList'

const defaultState = {
  items: [],
  totalCount: 0,
}

export default function sushiList(state = defaultState, action) {
  switch (action.type) {
    case PUSH_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.items],
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.value,
      }
    default:
      return state
  }
}
