import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../services/authentication'
import { user_login } from '../../services/appstore/actions/actions'

const SignOut = (props) => {
    useEffect(() => {
        const { user_login } = props
        console.log(props)
        try {
            signOut(user_login)
        } catch (error) {
            throw error
        }
    }, [props])

    return (
        <div>
            <Redirect to="/signin" />
        </div>
    )
}

export default connect(null, { user_login })(SignOut)
