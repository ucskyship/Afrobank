import React from 'react'
import { Col } from 'reactstrap'
import { ForgotPasswordForm } from '../forms/index'
import { Text } from '../signin/signin'

const ForgotPassword = () => {
    return (
        <Col style={{ height: '100vh' }}>
            <Col
                style={{ height: '100%' }}
                className="d-flex justify-content-center align-items-center"
            >
                <Col lg={4} xs={12}>
                    <Text className="text-center">Forgot password</Text>
                    <Text style={{ fontSize: '14px' }} className="text-center">
                        we heard you Forgot your password, not to worry you can
                        create another one {''}
                        <span
                            style={{ fontSize: '16px' }}
                            role="img"
                            aria-label="smiley"
                        >
                            😔
                        </span>
                    </Text>
                    <Text
                        style={{ fontSize: '14px' }}
                        className="text-center mb-3"
                    >
                        please ensure your email is valid
                    </Text>
                    <ForgotPasswordForm />
                </Col>
            </Col>
        </Col>
    )
}

export default ForgotPassword
