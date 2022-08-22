import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import allReducers from './reducers'
import { logger } from '../middlewares'


const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(logger)
)

const store = createStore(allReducers, composedEnhancers)

store.getState()

export default store;