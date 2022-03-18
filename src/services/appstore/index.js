import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import combineReducers from './reducers'

let composeEnhancers = compose

const appStore = () => {
  const store = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk))
  )

  const persiststore = persistStore(store)
  return { store, persiststore }
}

export default appStore
