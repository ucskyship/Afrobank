import React from 'react'
import { Row, Col } from 'reactstrap'
import { SignUpForm } from '../forms'
import { registerUser } from '../../services/authentication'
import styled from 'styled-components'

const FormHeaderText = styled.p`
    font-size: 16px;
    font-weight: 600;
`

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
            this.props.history.push('/signin')
        } catch (error) {
            this.setState({
                formLoading: false,
                regError: error,
            })
        }
    }
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        <Col lg={6}>
                            <div className="d-flex justify-content-center align-items-center">
                                <FormHeaderText>
                                    Create a free account
                                </FormHeaderText>
                            </div>
                            <SignUpForm
                                formLoading={this.state.formLoading}
                                handleSubmit={this.handleSubmit}
                                regError={this.state.regError}
                            />
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
