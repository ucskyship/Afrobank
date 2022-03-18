import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { signOut } from '../../services/authentication'

const SignOut = () => {
  useEffect(() => {
    try {
      signOut()
    } catch (error) {
      throw error
    }
  }, [])

  return (
    <div>
      <Redirect to="/signin" />
    </div>
  )
}

export default SignOut
