export default function isInitialized(state = false, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return true
    default:
      return state
  }
}
