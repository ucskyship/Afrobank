import React from 'react'
import {
  Dashboard,
  Homepage,
  Register,
  SignOut,
  Signin,
  ForgotPassword,
} from './allpages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ProtectedroutePages from './protectedroute.pages'

const routes = [
  {
    path: '/register',
    component: Register,
    public: true,
  },
  {
    path: '/signin',
    component: Signin,
    public: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    public: false,
  },
  {
    path: '/signout',
    component: SignOut,
    public: true,
  },
  {
    path: '/forgotpassword',
    component: ForgotPassword,
    public: true,
  },
]

const Main = () => {
  return (
    <TransitionGroup>
      <CSSTransition timeout={3000}>
        <BrowserRouter basename="/Afrobank">
          <Switch>
            {routes.map((data, i) =>
              data.public ? (
                <Route key={i} path={data.path} component={data.component} />
              ) : (
                <ProtectedroutePages
                  key={i}
                  path={data.path}
                  component={data.component}
                />
              )
            )}
            <Route path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Main
