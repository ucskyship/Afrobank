import intState from './initState'
import { createSlice } from '@reduxjs/toolkit'

const reducers = createSlice({
  name: 'user',
  initialState: intState,
  reducers: {
    login: (state, data) => {
      state.payLoad = data.payload
    },
    updateUser: (state, data) => {
      state.payLoad = data.payload
    },
    updateTransactionHistory: (state, data) => {
      state.transactions = data.payload
    },
    updateSignIn: (state, data) => {
      console.log(data.payload)
      state.isSignedIn = data.payload
    },
  },
})

export const { login, updateUser, updateTransactionHistory, updateSignIn } =
  reducers.actions
export default reducers.reducer
