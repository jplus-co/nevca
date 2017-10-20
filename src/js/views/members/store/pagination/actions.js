import {
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  UPDATE_PAGE,
  UPDATE_PAGE_COUNT
} from '@constants'

export const incrementPage = () => ({ type: INCREMENT_PAGE })
export const decrementPage = () => ({ type: DECREMENT_PAGE })

export const updatePage = page => ({
  type: UPDATE_PAGE,
  payload: page
})

export const updatePageCount = total => ({
  type: UPDATE_PAGE_COUNT,
  payload: total
})
