import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import QRCode from 'react-qr-code'

const Nav = styled.div`
    height: 50px;
`
const HomePage = () => {
    return (
        <div style={{ height: 100 }}>
            <Container>
                <Col>
                    <Row>
                        <Nav className="d-flex justify-content-between align-items-center">
                            <Col xl={6}></Col>
                            <Col
                                xl={6}
                                className="d-flex justify-content-between"
                            >
                                <Link to="/signin">sign in</Link>
                                <Link to="/register">register</Link>
                            </Col>
                        </Nav>
                    </Row>
                </Col>
                <Col>
                    <QRCode value="Akinola" />
                </Col>
            </Container>
            {/* <TransferModal /> */}
        </div>
    )
}

export default HomePage
