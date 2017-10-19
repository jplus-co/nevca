import { combineReducers } from 'redux'
import {
  UPDATE_PAGE
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  UPDATE_TOTAL_RECORDS,
  UPDATE_TOTAL_PAGES
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

const totalRecords = (
  state = 0,
  action
) => {
  switch (action.type) {
    case UPDATE_TOTAL_RECORDS:
      return action.payload
  }
}

const totalPages = (
  state = 0,
  action
) => {
  switch (action.type) {
    case UPDATE_TOTAL_PAGES:
      return action.payload
  }
}

export default combineReducers({
  current,
  totalRecords,
  totalPages
})
