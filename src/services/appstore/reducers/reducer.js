import intState from './initState'
import { createSlice } from '@reduxjs/toolkit'

const reducers = createSlice({
  name: 'user',
  initialState: intState,
  reducers: {
    login: (state, data) => {
      state.isSignedIn = true
      state.payLoad = data.payload
    },
    updateUser: (state, data) => {
      state.payLoad = data.payload
    },
    updateTransactionHistory: (state, data) => {
      state.transactions = data.payload
    },
  },
})

export const { login, updateUser, updateTransactionHistory } = reducers.actions
export default reducers.reducer
