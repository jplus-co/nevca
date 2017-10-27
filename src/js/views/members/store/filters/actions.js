import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from '@constants'

export const addFilter = id => ({
  type: ADD_FILTER,
  id
})

export const removeFilter = id => ({
  type: REMOVE_FILTER,
  id
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS
})
