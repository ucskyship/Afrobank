import React from 'react'
import { Input, Label } from 'reactstrap'
import styled from 'styled-components'

const StyleField = styled(Input)`
    height: 50px;
`

const CustomInputs = (props) => {
    return (
        <>
            <Label>{props.label}</Label>
            <StyleField {...props} />
        </>
    )
}

export default CustomInputs
