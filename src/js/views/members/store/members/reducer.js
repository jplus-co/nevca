import { combineReducers } from 'redux'
import { MEMBERS_LOAD, UPDATE_TOTAL_RECORDS } from '@constants'

const data = (
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

const count = (
  state = 0,
  action
) => {
  switch (action.type) {
    case UPDATE_TOTAL_RECORDS:
      return parseInt(action.payload)
    default:
      return state
  }
}

export default combineReducers({
  data,
  count
})
