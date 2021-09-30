import React from 'react'
import PinInput from 'react-pin-input'
import propTypes from 'prop-types'

const Pin = (props) => {
    return (
        <PinInput
            secret
            type="numeric"
            inputStyle={{
                fontWeight: 'bold',
                color: 'black',
                height: '40px',
                border: 'none',
                marginLeft: '25px',
                borderBottom: '1px solid black',
                margin: 'auto',
                width: '60px',
            }}
            onChange={props.onChange}
            length={4}
            {...props}
        />
    )
}

Pin.propTypes = {
    onChange: propTypes.func.isRequired,
}

export default Pin
