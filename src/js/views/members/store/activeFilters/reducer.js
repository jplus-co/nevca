const activeFilters = (
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

// Using commonjs so tests can be run in the command line using node.
module.exports = activeFilters
