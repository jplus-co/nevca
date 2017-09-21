import compose from 'lodash.compose'
import { getMembers } from './services'
import { toggleLoading } from '../loading/actions'

export const fetchMembers = () => (
  dispatch,
  getState
) => {
  const { filters } = getState()
  dispatch(toggleLoading)
  return getMembers(filters)
    .then(compose(dispatch, loadMembers))
    .then(() => dispatch(toggleLoading))
}


export const loadMembers = members => ({
  type: 'MEMBERS_LOAD',
  payload: members
})
