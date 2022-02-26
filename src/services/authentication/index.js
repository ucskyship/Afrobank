import Axios from '../index'
import { extractApiError } from '../../utils/error'

const registerUser = async (payload) => {
    try {
        await Axios.post('/register', payload)
    } catch (error) {
        extractApiError(error)
    }
}

const userLogin = async (payLoad, user_login) => {
    try {
        const resp = await Axios.post('/login', payLoad)

        user_login(resp.data.message, true)
        return resp
    } catch (error) {
        throw extractApiError(error)
    }
}

const resetPin = async (pin) => {
    const body = { pin }
    try {
        const resp = await Axios.post('/pinreset', body)
        console.log(resp)
    } catch (error) {
        throw error
    }
}

const signOut = (userLogin) => {
    try {
        userLogin('', false)
        localStorage.clear()
    } catch (error) {
        throw error
    }
}

const createPin = async (payload) => {
    try {
        await Axios.patch('/createpin', payload)
    } catch (error) {
        console.log(error)
        throw extractApiError(error)
    }
}

const fetchUser = async (accountNumber) => {
    try {
        const res = await Axios.post('/user', accountNumber)
        console.log(res)
    } catch (error) {
        console.log(error)
        throw extractApiError(error)
    }
}

export { userLogin, resetPin, registerUser, signOut, createPin, fetchUser }
