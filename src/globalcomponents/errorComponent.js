import React from 'react'
import { MessageBar, MessageBarType } from '@fluentui/react'

const ErrorComponent = ({ text, ...props }) => {
  return (
    <MessageBar
      className="text-center"
      messageBarType={MessageBarType.error}
      {...props}
    >
      {text}
    </MessageBar>
  )
}

export default ErrorComponent
