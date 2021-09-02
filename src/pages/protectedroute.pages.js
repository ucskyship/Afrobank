import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                rest.isSignedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    )
}

const mapStateToProps = (state) => ({
    isSignedIn: state.user.signIn.isSignedIn,
})

export default connect(mapStateToProps, {})(ProtectedRoute)
