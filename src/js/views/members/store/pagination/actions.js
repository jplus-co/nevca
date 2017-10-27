import {
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  UPDATE_PAGE,
  UPDATE_PAGE_COUNT
} from '@constants'
import { fetchMembers } from '../members/actions'

export const incrementPage = () => (
  dispatch,
  getState
) => {
  dispatch({ type: INCREMENT_PAGE })
  dispatch(fetchMembers())
}

export const decrementPage = () => (
  dispatch,
  getState
) => {
  dispatch({ type: DECREMENT_PAGE })
  dispatch(fetchMembers())
}

export const updatePage = page => (
  dispatch,
  getState
) => {
  dispatch({
    type: UPDATE_PAGE,
    payload: page
  })
  dispatch(fetchMembers())
}

export const updatePageCount = total => ({
  type: UPDATE_PAGE_COUNT,
  payload: total
})
