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
      <Col
        style={{
          height: '100vh',
          position: 'relative',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Row style={{ height: '100%' }}>
          <Col
            lg={8}
            className="d-flex justify-content-center align-items-center"
          >
            <Col lg={6} xs={12} md={7}>
              <Text
                className="text-center"
                style={{ color: 'black', opacity: '0.5' }}
              >
                Create an Account
              </Text>

              <Col className="m-auto" lg={6} md={12} xs={12} xl={10}>
                <SignUpForm
                  handleSubmit={this.handleSubmit}
                  formLoading={this.state.formLoading}
                  regError={this.state.regError}
                />
              </Col>
            </Col>
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-center bg-dark align-items-center mobile_mt mobile_pb"
          >
            <Col lg={7} className="m-auto">
              <Text style={{ color: 'white' }} className="text-center hide">
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
                Fill up personal information and start journey with us
              </Text>
              <div className="d-flex justify-content-center pt-4">
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  to="/signin"
                >
                  <Button className="rounded-pill">Sign In</Button>
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
