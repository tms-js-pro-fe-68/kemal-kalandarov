export const PUSH_ITEMS = 'PUSH_ITEMS'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

export const pushSushiItems = items => ({
  type: PUSH_ITEMS,
  items,
})

export const setTotalCount = value => ({
  type: SET_TOTAL_COUNT,
  value,
})
