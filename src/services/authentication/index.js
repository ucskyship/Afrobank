import Axios from '../index'
import { extractApiError } from '../../utils/error'

const registerUser = async (payload) => {
    try {
        await Axios.post('/register', payload)
    } catch (error) {
        throw extractApiError(error)
    }
}

const pollUser = async (id, token) => {
    try {
        const res = await Axios.get(`/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        console.log(res)
    } catch (error) {
        console.log(extractApiError(error))
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

const resetPin = async (pin, accountNumber) => {
    const body = { pin }
    try {
        await Axios.post('/pinreset', body)
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
        const res = await Axios.patch('/createpin', payload)
        console.log(res)
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

export {
    userLogin,
    resetPin,
    registerUser,
    signOut,
    createPin,
    fetchUser,
    pollUser,
}
