import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
