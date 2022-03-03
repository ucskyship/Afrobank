import React from 'react'
import { MessageBar, MessageBarType } from '@fluentui/react'

const ErrorComponent = ({ text, ...props }) => {
    return (
        <MessageBar messageBarType={MessageBarType.error} {...props}>
            {text}
        </MessageBar>
    )
}

export default ErrorComponent
