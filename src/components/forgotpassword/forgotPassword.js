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
          <Text
            style={{ color: 'black', opacity: '0.5' }}
            className="text-center mobile_text"
          >
            Forgot password
          </Text>

          <Col className="m-auto" lg={6} xs={12} xl={10}>
            <ForgotPasswordForm />
          </Col>
        </Col>
      </Col>
    </Col>
  )
}

export default ForgotPassword
