import React from 'react'
import Main from './pages'
import { Provider } from 'react-redux'
import appStore from './services/appstore'
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function App() {
  return (
    <Provider store={appStore().store}>
      <PersistGate loading={null} persistor={appStore().persiststore}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

export default App
