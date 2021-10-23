import React from 'react'
import styled from 'styled-components'
const CustomBtn = styled.button`
    border: none;
    outline: none;
    ${(props) => !!props.bg && `background: ${props.bg};`}
    ${(props) => !!props.width && `width: ${props.width}px;`}
    ${(props) => !!props.height && `height: ${props.height}px;`}
    ${(props) => !!props.color && `color: ${props.color};`}
`

const Button = (props) => {
    const IconComponent = typeof props.icon === 'function' && props.icon
    return (
        <CustomBtn
            className="d-flex justify-content-around align-items-center"
            {...props}
        >
            {!!props.text && props.text}
            {!!props.icon && <IconComponent />}
        </CustomBtn>
    )
}

export default Button
