import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isUserSignedIn } from '../services/authentication'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !!isUserSignedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  )
}

export default ProtectedRoute
