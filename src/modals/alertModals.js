import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Error = styled.p`
    color: red;
    font-weight: 500;
    font-size: 18px;
    width: 100%;
`

class AlertModals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SweetAlert
                {...this.props}
                title={this.props.title}
                timeout={3000}
                show={this.props.show}
                showConfirm={false}
                onConfirm={() => {}}
                showCancel={false}
            >
                <div style={{ width: '100%' }}>
                    <Error>{this.props.text}</Error>
                </div>
            </SweetAlert>
        )
    }
}

AlertModals.propTypes = {
    text: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    show: propTypes.bool.isRequired,
}
export default AlertModals
