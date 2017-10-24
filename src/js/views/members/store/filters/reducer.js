import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from '@constants'

const filters = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_FILTER:
      return [
        ...state,
        action.id
      ]
    case REMOVE_FILTER:
      return state.filter(id => id !== action.id)
    case CLEAR_FILTERS:
      return []
    default:
      return state
  }
}

export default filters
