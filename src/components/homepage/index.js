import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Button, Text } from '../signin/signin'

const HomePage = () => {
    return (
        <Col
            className="pt-3"
            style={{
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: '#065340',
            }}
        >
            <Col>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col lg={6} sm={12}>
                        <p>Afrobank</p>
                    </Col>
                    <Col className="d-flex justify-content-end " lg={6}>
                        <Link to="/signin">
                            <Button
                                className="rounded-pill"
                                style={{
                                    backgroundColor: 'white',
                                    color: '#065340',
                                }}
                            >
                                sign in
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col
                style={{ height: '100%' }}
                className="d-flex justify-content-between align-items-center"
            >
                <Row>
                    <Col lg={4} sm={12}>
                        <div>
                            <Text
                                style={{
                                    color: 'white',
                                }}
                            >
                                Afrobank is your life long partner
                            </Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: '24px',
                                    fontWeight: '500',
                                    opacity: 0.6,
                                }}
                            >
                                401k taxpayer retirement capitalization
                                consulting prices interest rate established
                                gains exchange traded funds financial health.
                                Credit shares fluctuate.
                            </Text>
                            <Link className="mt-4" to="/register">
                                <Button
                                    className="rounded-pill "
                                    style={{
                                        backgroundColor: 'white',
                                        color: '#065340',
                                        width: '60%',
                                        height: '55px',
                                        fontSize: '20px',
                                    }}
                                >
                                    Let's get you started
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
