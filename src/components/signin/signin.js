import React from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../services/authentication'
import { user_login } from '../../services/appstore/actions/actions'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '', formLoading: false }
    }
    handleSubmit = async (value) => {
        const { user_login } = this.props
        this.setState({
            formLoading: true,
        })
        try {
            await userLogin(value, user_login)
            this.setState({
                error: '',
            })
            this.setState({
                formLoading: false,
            })
        } catch (error) {
            this.setState({
                error: error.response.data.message || 'An error occured',
                formLoading: false,
            })
        }
    }
}

export default connect(null, { user_login })(SignIn)
