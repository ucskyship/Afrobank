import React from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../services/authentication'
import { user_login } from '../../services/appstore/actions/actions'
// import { Col, Container, Row } from 'reactstrap'
import { LoginForm } from '../forms/index'
import styled from 'styled-components'

const P = styled.p`
    color: ${(props) => props.color};
`

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '', formLoading: false }
    }
    handleSubmit = async (value) => {
        const { user_login, history } = this.props
        this.setState({
            formLoading: true,
            error: '',
        })
        try {
            await userLogin(value, user_login)
            this.setState({
                formLoading: false,
            })
            history.push('/dashboard')
        } catch (error) {
            this.setState({
                error: error.response.data.message || 'An error occured',
                formLoading: false,
            })
        }
    }

    render() {
        const { formLoading } = this.state
        return (
            <div className="d-flex justify-content-center align-items-center">
                {LoginForm(this.handleSubmit, formLoading, this.state.error)}
                {/* {!!this.state.error && <P color="red">{this.state.error}</P>} */}
            </div>
        )
    }
}

export default connect(null, { user_login })(SignIn)
