import Axios from '../index'
import { extractApiError } from '../../utils/error'
import { user_login } from '../appstore/actions/actions'
import appStore from '../appstore'

const store = appStore().store

const registerUser = async (payload) => {
    try {
        await Axios.post('/register', payload)
    } catch (error) {
        throw extractApiError(error)
    }
}

const isUserSignedIn = () => {
    const isUserSignedIn = store.getState().user.signIn.isSignedIn
    return isUserSignedIn
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

const userLogin = async (payLoad) => {
    try {
        const resp = await Axios.post('/login', payLoad)
        // console.log(resp.data)

        // const message = resp.data.message
        store.dispatch(user_login(resp.data.message, true))

        console.log(store.getState().user)

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
    isUserSignedIn,
}
