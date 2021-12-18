import React from 'react'
import { Row, Col } from 'reactstrap'
import { SignUpForm } from '../forms'
import { registerUser } from '../../services/authentication'
import { Button, Text } from '../signin/signin'
import { Link } from 'react-router-dom'

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
            <Col style={{ height: '100vh', overflow: 'hidden' }}>
                <Row style={{ height: '100%' }}>
                    <Col
                        lg={8}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Col lg={6} xs={11}>
                            <Text className="text-center">
                                Create an Account
                            </Text>

                            <SignUpForm
                                handleSubmit={this.handleSubmit}
                                formLoading={this.state.formLoading}
                                error={this.state.regError}
                            />
                        </Col>
                    </Col>
                    <Col
                        lg={4}
                        style={{ backgroundColor: '#065340' }}
                        className="d-flex justify-content-center align-items-center "
                    >
                        <Col lg={7} className="m-auto">
                            <Text
                                style={{ color: 'white' }}
                                className="text-center"
                            >
                                Hello, Friend
                            </Text>
                            <Text
                                style={{
                                    fontSize: '18px',
                                    color: 'white',
                                    opacity: 0.7,
                                    fontWeight: 500,
                                }}
                                className="text-center"
                            >
                                Welcome back, we've missed you
                            </Text>
                            <div className="d-flex justify-content-center pt-4">
                                <Link
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                    }}
                                    to="/signin"
                                >
                                    <Button className="rounded-pill">
                                        Sign In
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    </Col>
                </Row>

                {/* <Col className="bg-dark" style={{ height: '160px' }}></Col> */}
            </Col>
        )
    }
}

export default Register
