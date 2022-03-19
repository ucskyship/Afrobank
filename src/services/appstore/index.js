import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import combineReducers from './reducers'

const appStore = () => {
  const store = createStore(combineReducers, applyMiddleware(...[thunk]))

  const persiststore = persistStore(store)
  return { store, persiststore }
}

export default appStore
