import React, {useEffect} from "react";
import Main from "./pages";
import { Provider } from "react-redux"
import appStore from "./services/appstore"
import {PersistGate } from "redux-persist/integration/react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GA_ID)
console.log(process.env.REACT_APP_GA_ID)

function App() {
   useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    })
  return (
    <Provider store={appStore().store}>
      <PersistGate loading={null} persistor={appStore().persiststore}>
      <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
