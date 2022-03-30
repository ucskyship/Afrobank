import React from 'react'
import Main from './pages'
import { Provider } from 'react-redux'
import { appStore, persistor } from './services/appstore'
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const store = appStore
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

export default App
