import { combineReducers, createStore, applyMiddleware } from 'redux'

// reducers
import activeFilters from './activeFilters/reducer'
import members from './members/reducer'
import sectors from './sectors/reducer'

// thunk middleware for async actions
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  activeFilters,
  members,
  sectors
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)
