import { ADD_FILTER, REMOVE_FILTER } from '@constants'

export const addFilter = id => ({
  type: ADD_FILTER,
  id
})

export const removeFilter = id => ({
  type: REMOVE_FILTER,
  id
})
