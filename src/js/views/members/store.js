import { createStore } from 'redux'
import rootReducer from './reducers'
import { fetchSectors } from './helpers'

export default createStore(rootReducer)
