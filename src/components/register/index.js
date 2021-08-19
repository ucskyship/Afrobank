import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import styled from 'styled-components'
import { SignUpForm } from '../forms'
import { registerUser } from '../../services/authentication'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formLoading: false,
            regError: '',
        }
    }

    handleSubmit = async (values) => {
        this.setState({ formLoading: true, regError: '' })
        try {
            await registerUser(values)
            this.setState({ formLoading: false })
        } catch (error) {
            this.setState({ formLoading: false, regError: error.message })
        }
    }
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        <Col lg={6}>
                            {SignUpForm(
                                this.state.formLoading,
                                this.handleSubmit,
                                this.state.regError
                            )}
                        </Col>
                        <Col style={{ background: '#4004af' }} lg={6}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h1>Hellow</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default Register
