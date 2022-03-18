import {
  LOGIN,
  PINRESET,
  REGISTER,
  TOGGLEBALANCE,
  TRANSACTIONHISTORY,
  UPDATEUSER,
} from './index'

const user_login = (data, isSignedIn) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: data,
    isSignedIn,
  })
}

const updateUser = (data) => (dispatch) => {
  dispatch({
    type: UPDATEUSER,
    payload: data,
  })
}

const userRegister = (data, isRegistered) => (dispatch) => {
  dispatch({
    type: REGISTER,
    payload: data,
    isRegistered,
  })
}

const userPinReset = (data, isPinReset) => (dispatch) => {
  dispatch({
    type: PINRESET,
    payload: data,
    isPinReset,
  })
}

const updateTransactionHistory = (data) => (dispatch) => {
  dispatch({
    type: TRANSACTIONHISTORY,
    payload: data,
  })
}

const toggleDisplay = (display) => (dispatch) => {
  dispatch({
    type: TOGGLEBALANCE,
    payload: display,
  })
}

export {
  user_login,
  userPinReset,
  userRegister,
  updateTransactionHistory,
  toggleDisplay,
  updateUser,
}
