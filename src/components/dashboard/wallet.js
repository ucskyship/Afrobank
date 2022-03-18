import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`
const Wallet = () => {
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
      <Row>
        <Col lg={12}>
          <div className="d-flex pt-4 align-items-center">
            <Type size="25" className="font-weight-bold" color="white">
              Wallet
            </Type>
          </div>
        </Col>
      </Row>
    </Col>
  )
}
export default Wallet
