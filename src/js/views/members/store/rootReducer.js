import { combineReducers } from 'redux'

// reducers
import loading from './loading/reducer'
import filters from './filters/reducer'
import members from './members/reducer'
import sectors from './sectors/reducer'

export default combineReducers({
  loading,
  filters,
  members,
  sectors
})
