import { LOGIN, pinReset, register, transfer } from './index'

const user_login = (data, isSignedIn) => (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: data,
        isSignedIn,
    })
}

const userRegister = (data, isRegistered) => (dispatch) => {
    dispatch({
        type: register,
        payload: data,
        isRegistered,
    })
}

const userPinReset = (data, isPinReset) => (dispatch) => {
    dispatch({
        type: pinReset,
        payload: data,
        isPinReset,
    })
}

export { user_login, userPinReset, userRegister }
