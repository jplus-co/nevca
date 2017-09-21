import compose from 'lodash.compose'
import { getSectors } from './services'
import { SECTORS_LOAD } from '@constants'

export const fetchSectors = () => dispatch => (
  getSectors()
    .then(compose(dispatch, loadSectors))
)

export const loadSectors = sectors => ({
  type: SECTORS_LOAD,
  payload: sectors
})
