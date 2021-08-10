import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

export const Type = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size}px;
`
const Analysis = () => {
    return (
        <Col>
            <Row>
                <Col lg={12}>
                    <div className="d-flex pt-4 align-items-center">
                        <Type
                            size="25"
                            className="font-weight-bold"
                            color="white"
                        >
                            Analysis
                        </Type>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
export default Analysis
