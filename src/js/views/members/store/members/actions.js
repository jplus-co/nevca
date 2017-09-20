import compose from 'lodash.compose'
import { getMembers } from './services'

export const fetchMembers = (
  activeFilters = []
) => dispatch => {
  getMembers(activeFilters)
    .then(compose(
      dispatch,
      loadMembers
    ))
}

export const loadMembers = members => ({
  type: 'MEMBERS_LOAD',
  payload: members
})
