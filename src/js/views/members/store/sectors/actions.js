import compose from 'lodash.compose'
import { getSectors } from './services'

export const fetchSectors = () => dispatch => {
  getSectors()
    .then(compose(
      dispatch,
      loadSectors
    ))
}

export const loadSectors = sectors => ({
  type: 'SECTORS_LOAD',
  payload: sectors
})
