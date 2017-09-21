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

// Using commonjs so tests can be run in the command line using node.
module.exports = loading
