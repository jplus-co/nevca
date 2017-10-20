const filters = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return [
        ...state,
        action.id
      ]
    case 'REMOVE_FILTER':
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}

export default filters
