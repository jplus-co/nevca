import { combineReducers, createStore, applyMiddleware } from 'redux'

// reducers
import loading from './loading/reducer'
import filters from './filters/reducer'
import members from './members/reducer'
import sectors from './sectors/reducer'

// thunk middleware - for async actions
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  loading,
  filters,
  members,
  sectors
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)
