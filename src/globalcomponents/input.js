import React from 'react'
import { Input, Label } from 'reactstrap'
import styled from 'styled-components'

const StyleField = styled(Input)`
  height: 48px;
  transition: all ease 0.3s;
  outline: none;
`

const CustomInputs = (props) => {
  return (
    <>
      <Label className="font-weight-bold" style={{ fontSize: '12px' }}>
        {props.label}
      </Label>
      {props.type === 'select' ? (
        <StyleField {...props}>{props.children}</StyleField>
      ) : (
        <StyleField {...props} />
      )}
    </>
  )
}

export default CustomInputs
