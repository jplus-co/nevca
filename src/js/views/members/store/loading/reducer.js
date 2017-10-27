import { TOGGLE_LOADING } from '@constants'

const loading = (
  state = true,
  action
) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return action.loading
    default:
      return state
  }
}

export default loading
