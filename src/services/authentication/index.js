import Axios from '../index'
import { extractApiError } from '../../utils/error'
import { user_login } from '../appstore/actions/actions'
import appStore from '../appstore'

const store = appStore().store

const isUserSignedIn = () => store.getState().user.signIn.isSignedIn
const userHasPin = () => !!store.getState().user.signIn.payLoad.pin
const userToken = () => store.getState().user.signIn.payLoad.token

const registerUser = async (payload) => {
    try {
        await Axios.post('/register', payload)
    } catch (error) {
        throw extractApiError(error)
    }
}

const pollUser = async () => {
    const token = userToken()
    const accountNumber = store
        .getState()
        .user.signIn.payLoad.accountNumber.toString()
    try {
        const res = await Axios.get(`/user/${accountNumber}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        store.dispatch(user_login(res.data.message, true))
    } catch (error) {
        console.log(extractApiError(error))
    }
}

const userLogin = async (payLoad) => {
    try {
        const resp = await Axios.post('/login', payLoad)
        store.dispatch(user_login(resp.data.message, true))
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

const signOut = () => {
    try {
        store.dispatch(user_login('', false))
        localStorage.clear()
    } catch (error) {
        throw error
    }
}

const createPin = async (pin) => {
    const payLoad = {
        accountNumber: store
            .getState()
            .user.signIn.payLoad.accountNumber.toString(),
        pin,
    }
    try {
        await Axios.patch('/createpin', payLoad)
    } catch (error) {
        throw extractApiError(error)
    }
}

const fetchUser = async () => {
    let accountNumber = store
        .getState()
        .user.signIn.payLoad.accountNumber.toString()
    try {
        const res = await Axios.get('/user/' + accountNumber)
        console.log(res)
    } catch (error) {
        console.log(error)
        throw extractApiError(error)
    }
}

export {
    signOut,
    pollUser,
    resetPin,
    fetchUser,
    createPin,
    userLogin,
    userHasPin,
    registerUser,
    isUserSignedIn,
    userToken,
}
