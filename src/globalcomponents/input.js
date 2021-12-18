import React from 'react'
import { Input, Label } from 'reactstrap'
import styled from 'styled-components'

const StyleField = styled(Input)`
    height: 54px;
    transition: all ease 0.3s;
`

const CustomInputs = (props) => {
    return (
        <>
            <Label>{props.label}</Label>
            {props.type === 'select' ? (
                <StyleField {...props}>{props.children}</StyleField>
            ) : (
                <StyleField {...props} />
            )}
        </>
    )
}

export default CustomInputs
