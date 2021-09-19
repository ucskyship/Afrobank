import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isSignedIn = useSelector((state) => state.user.signIn.isSignedIn)

    return (
        <Route
            {...rest}
            render={(props) =>
                isSignedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    )
}

export default ProtectedRoute
