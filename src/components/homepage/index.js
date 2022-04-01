import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Button, Text } from '../signin/signin'
import city from '../../assets/images/city.jpg'
import styled from 'styled-components'
import { connect } from 'react-redux'

const MainWrapper = styled(Col)`
  height: 100vh;
  background: #065340;
  background-image: url(${city});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

const NameDiv = styled.div`
  height: 50px;
  width: 50px;
  background: #4004af;
  font-weight: 500;
  font-size: 14px;
  color: white;
`

const HomePage = (props) => {
  const payLoad = props.payLoad || {}

  const isEmpty = Object.keys(payLoad).length === 0
  const name = isEmpty ? {} : `${payLoad.firstName[0]}${payLoad.lastName[0]}`
  const { firstName, lastName } = props.payLoad
  return (
    <MainWrapper className="pt-3">
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="pl-4" xs={6} lg={6} sm={6}>
          <p
            className="font-weight-bold"
            style={{ color: 'whitesmoke', fontSize: '32px' }}
          >
            Afrobank
          </p>
        </Col>
        <Col
          lg={6}
          sm={6}
          xs={6}
          className="d-flex align-items-center justify-content-end  pr-4"
        >
          {props.isSignedIn ? (
            <Link to="/dashboard">
              <NameDiv
                title={`${firstName} ${lastName}`}
                className="rounded-circle d-flex justify-content-center align-items-center"
              >
                {name.toUpperCase()}
              </NameDiv>
            </Link>
          ) : (
            <Link to="/signin">
              <Button
                className="rounded-pill"
                style={{
                  backgroundColor: 'white',
                  color: '#065340',
                  fontWeight: '550',
                }}
              >
                sign in
              </Button>
            </Link>
          )}
        </Col>
      </Row>
      <Col
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100%' }}
      >
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={7}>
            <Text
              className="is-center text-center"
              style={{
                color: 'white',
              }}
            >
              Afrobank is your life long partner
            </Text>
            <Text
              className="is-center text-center"
              style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '500',
                opacity: 0.6,
              }}
            >
              401k taxpayer retirement capitalization consulting prices interest
              rate established gains exchange traded funds financial health.
              Credit shares fluctuate.
            </Text>
            <div className="d-flex justify-content-center">
              <Link
                style={{ textDecoration: 'none' }}
                className="mt-4"
                to="/register"
              >
                <Button
                  className="rounded-pill  d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: 'white',
                    color: '#065340',
                    height: '55px',
                    fontSize: '20px',
                    fontWeight: '550',
                  }}
                >
                  get started
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
      {/* <TransferModal /> */}
    </MainWrapper>
  )
}
const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  payLoad: state.user.payLoad,
})

export default connect(mapStateToProps, {})(HomePage)
