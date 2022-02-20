import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Button, Text } from '../signin/signin'
import { ArrowForward } from '@material-ui/icons'
import Image from '../../assets/images/woman.png'

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
            <Row className="d-flex justify-content-between align-items-center">
                <Col lg={6} sm={6}>
                    <p
                        style={{
                            color: 'whitesmoke',
                            fontWeight: '600',
                            fontSize: '30px',
                        }}
                    >
                        Afrobank
                    </p>
                </Col>
                <Col
                    className="d-flex align-items-center justify-content-end"
                    lg={6}
                    sm={3}
                >
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
                style={{ height: '100%' }}
                className="d-flex align-items-center"
            >
                <Row className="d-flex justify-content-between align-items-center">
                    <Col lg={5} sm={12}>
                        <div>
                            <Text
                                className="is-center"
                                style={{
                                    color: 'white',
                                }}
                            >
                                Afrobank is your life long partner
                            </Text>
                            <Text
                                className="is-center"
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
                                    className="rounded-pill mobile_width d-flex justify-content-center align-items-center"
                                    style={{
                                        backgroundColor: 'white',
                                        color: '#065340',
                                        width: '40%',
                                        height: '55px',
                                        fontSize: '20px',
                                        fontWeight: '550',
                                    }}
                                >
                                    get started
                                    <ArrowForward className="pl-2" />
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img
                            src={Image}
                            alt={Image}
                            className="rounded"
                            width="550"
                            height="auto"
                        />
                    </Col>
                </Row>
            </Col>

            {/* <TransferModal /> */}
        </Col>
    )
}

export default HomePage
