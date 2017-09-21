import compose from 'lodash.compose'
import { getMembers } from './services'
import { toggleLoading } from '../loading/actions'
import { MEMBERS_LOAD } from '@constants'

export const fetchMembers = () => (
  dispatch,
  getState
) => {
  const { filters, loading } = getState()
  !loading && dispatch(toggleLoading(loading))
  return getMembers(filters)
    .then(compose(dispatch, loadMembers))
    .then(() => dispatch(toggleLoading(loading)))
}

export const loadMembers = members => ({
  type: MEMBERS_LOAD,
  payload: members
})
