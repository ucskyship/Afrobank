import React from 'react'
import { TextField } from '@fluentui/react/lib/TextField'

const FluentUiInput = (props) => {
    return (
        <TextField
            {...props}
            styles={{
                wrapper: {
                    background: 'yellow',
                },
                fieldGroup: {
                    height: '48px',
                    borderRadius: '0.25rem',
                    border: '1px solid #ced4da',
                    outline: 'none',
                    fontSize: '1rem',
                    fontWeight: '400',
                },
                revealButton: {
                    height: '100%',
                },
                revealIcon: {
                    fontSize: '18px',
                },
            }}
        />
    )
}

export default FluentUiInput
