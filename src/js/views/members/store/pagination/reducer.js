import { combineReducers } from 'redux'
import {
  UPDATE_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  UPDATE_PAGE_COUNT
} from '@constants'

const current = (
  state = 1,
  action
) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return action.payload
    case INCREMENT_PAGE:
      return state + 1
    case DECREMENT_PAGE:
      return state - 1
    default:
      return state
  }
}

const count = (
  state = 0,
  action
) => {
  switch (action.type) {
    case UPDATE_PAGE_COUNT:
      return parseInt(action.payload)
    default:
      return state
  }
}

export default combineReducers({
  current,
  count
})
