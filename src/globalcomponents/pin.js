import React from 'react'
import PinInput from 'react-pin-input'
import propTypes from 'prop-types'

const Pin = (props) => {
  return (
    <PinInput
      secret
      type="numeric"
      className="bg-dark"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '65%',
      }}
      inputStyle={{
        fontWeight: 'bold',
        color: 'black',
        height: '40px',
        border: '2px solid grey',
        borderRadius: '5px',
        width: '40px',
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
