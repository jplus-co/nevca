import { SECTORS_LOAD } from '@constants'

const sectors = (
  state = [],
  action
) => {
  switch (action.type) {
    case SECTORS_LOAD:
      return action.payload
    default:
      return state
  }
}

// Using commonjs so tests can be run in the command line using node.
module.exports = sectors
