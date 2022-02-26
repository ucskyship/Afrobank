import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Button, Text } from '../signin/signin'

const HomePage = () => {
    return (
        <Col
            className="pt-3  psb-5"
            style={{
                height: '80vh',
                backgroundColor: '#065340',
            }}
        >
            <Row className="d-flex justify-content-between align-items-center">
                <Col className="pl-4" lg={6} sm={6}>
                    <p
                        className="font-weight-bold"
                        style={{ color: 'whitesmoke', fontSize: '32px' }}
                    >
                        Afrobank
                    </p>
                </Col>
                <Col className="d-flex align-items-center justify-content-end  pr-4">
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
                            401k taxpayer retirement capitalization consulting
                            prices interest rate established gains exchange
                            traded funds financial health. Credit shares
                            fluctuate.
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
        </Col>
    )
}

export default HomePage
