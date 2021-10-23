import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../services/authentication'
import { user_login } from '../../services/appstore/actions/actions'
import { LoginForm } from '../forms/index'

const SignIn = (props) => {
    const [state, setState] = useState({
        error: '',
        formLoading: false,
    })

    const handleSubmit = async (value) => {
        setState({
            formLoading: true,
            error: '',
        })
        try {
            await userLogin(value, props.user_login)
            setState({
                formLoading: false,
            })
            props.history.push('/dashboard')
        } catch (error) {
            setState({
                error: error || 'An error occured',
                formLoading: false,
            })
        }
    }

    return (
        <div className="d-flex bg-dark justify-content-center align-items-center">
            <LoginForm
                handleSubmit={handleSubmit}
                formLoading={state.formLoading}
                error={state.error}
            />
        </div>
    )
}

export default connect(null, { user_login })(SignIn)
