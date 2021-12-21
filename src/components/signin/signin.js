import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Col,
    Row,
    Button as btn,
    Modal,
    Container,
    ModalBody,
} from 'reactstrap'
import { userLogin } from '../../services/authentication'
import { user_login } from '../../services/appstore/actions/actions'
import { LoginForm } from '../forms/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Clear, Facebook, Instagram, Twitter } from '@material-ui/icons'
import Privacy from './privacy'

export const Text = styled.p`
    font-size: 42px;
    font-weight: 600;
    color: #065340;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.02rem;
`
export const Button = styled(btn)`
    background-color: transparent;
    border: 2px solid white;
    width: 150px;
    height: 50px;
    color: white;
`

const SignIn = (props) => {
    const [state, setState] = useState({
        error: '',
        formLoading: false,
    })
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

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
        <Col
            // style={{ height: '100vh'
            //  }}
            style={{
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                // backgroundColor: '#065340',
            }}
        >
            <Row style={{ height: '100%' }}>
                <Col
                    lg={8}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Col lg={6} xs={12} md={7}>
                        <Text className="text-center mobile_text">
                            Sign in to Account
                        </Text>
                        <Col
                            lg={4}
                            sm={12}
                            md={6}
                            className="m-auto pt-3 pb-4 hide"
                        >
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col lg={2} sm={3}>
                                    <Facebook
                                        style={{ color: '#065340' }}
                                        fontSize="large"
                                    />
                                </Col>
                                <Col lg={2} sm={3}>
                                    <Twitter
                                        style={{ color: '#065340' }}
                                        fontSize="large"
                                    />
                                </Col>
                                <Col lg={2} sm={3}>
                                    <Instagram
                                        style={{ color: '#065340' }}
                                        fontSize="large"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Text
                            style={{ fontSize: '14px' }}
                            className="text-center"
                        >
                            or use your email account
                        </Text>
                        <LoginForm
                            handleSubmit={handleSubmit}
                            formLoading={state.formLoading}
                            error={state.error}
                        />
                        <Col
                            style={{
                                position: 'absolute',
                                top: '130%',
                                bottom: 0,
                            }}
                        >
                            <Text
                                style={{ fontSize: '14px', cursor: 'pointer' }}
                                className="text-center"
                                onClick={() => toggle()}
                            >
                                policy . Terms & conditions
                            </Text>
                        </Col>
                    </Col>
                </Col>
                <Col
                    lg={4}
                    style={{ backgroundColor: '#065340' }}
                    className="hide d-flex justify-content-center align-items-center mobile_mt mobile_pb"
                >
                    <Col lg={7} className="m-auto ">
                        <Text
                            style={{ color: 'white' }}
                            className="text-center hide"
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
                            className="text-center hide"
                        >
                            Fill up personal information and start journey with
                            us
                        </Text>
                        <div className="d-flex justify-content-center pt-4">
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to="/register"
                            >
                                <Button className="rounded-pill">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Col>
            </Row>

            <Modal size="lg" isOpen={open} toggle={() => toggle()} centered>
                <Container>
                    <Col>
                        <Col
                            lg={6}
                            className="ml-auto d-flex justify-content-end align-items-center"
                        >
                            <button
                                className="float-right btn "
                                onClick={() => toggle()}
                            >
                                <Clear />
                            </button>
                        </Col>
                    </Col>
                    <ModalBody></ModalBody>
                    <Col>
                        <Privacy />
                    </Col>
                </Container>
            </Modal>
            {/* <Col className="bg-dark" style={{ height: '160px' }}></Col> */}
        </Col>
    )
}

export default connect(null, { user_login })(SignIn)
