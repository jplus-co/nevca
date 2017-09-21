import { MEMBERS_LOAD } from '@constants'

const members = (
  state = [],
  action
) => {
  switch (action.type) {
    case MEMBERS_LOAD:
      return action.payload
    default:
      return state
  }
}

// Using commonjs so tests can be run in the command line using node.
module.exports = members
