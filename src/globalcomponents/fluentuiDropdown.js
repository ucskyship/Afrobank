import React from 'react'
import { Dropdown } from '@fluentui/react/lib/Dropdown'
import { initializeIcons } from '@fluentui/react'

initializeIcons()

function FluentuiDropdown({ ...props }) {
  return (
    <Dropdown
      styles={{
        dropdown: {
          height: '48px',
          border: '1px solid #ced4da',
          borderRadius: '0.25rem',
        },
        title: {
          border: 'none',
          paddingTop: '10px',
          height: '100%',
          outline: 'none',
        },
        caretDownWrapper: {
          paddingTop: '10px',
          height: '100%',
        },
        label: {
          color: '#212529',
          fontWeight: 'normal',
        },
      }}
      {...props}
    />
  )
}

export default FluentuiDropdown
