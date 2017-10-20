import compose from 'lodash.compose'
import { getMembers } from './services'
import { toggleLoading } from '../loading/actions'
import { MEMBERS_LOAD, UPDATE_TOTAL_RECORDS } from '@constants'

export const fetchMembers = () => (
  dispatch,
  getState
) => {
  dispatch(toggleLoading(true))
  return getMembers(dispatch, getState)
    .then(data => data.json)
    .then(compose(dispatch, loadMembers))
    .then(() => dispatch(toggleLoading(false)))
}

export const loadMembers = members => ({
  type: MEMBERS_LOAD,
  payload: members
})

export const updateTotalRecords = total => ({
  type: UPDATE_TOTAL_RECORDS,
  payload: total
})
