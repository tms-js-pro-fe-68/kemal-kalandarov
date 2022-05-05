export default function count(state = 0, action) {
  switch (action.type) {
    case 'COUNT_ADD':
      return state + action.additionalValue
    default:
      return state
  }
}
