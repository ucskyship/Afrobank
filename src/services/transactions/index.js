import Axios from '../index'
import { extractApiError } from '../../utils/error'
import { updateTransactionHistory } from '../appstore/actions/actions'
import { userToken, pollUser } from '../authentication'
import appStore from '../appstore'

const store = appStore().store

const transfer = async (payload, sender, pin) => {
    const { recipient, amount } = payload
    const body = {
        recipient: recipient.toString(),
        amount,
        sender: sender.toString(),
        pin,
    }
    const token = userToken()
    try {
        const response = await Axios.post('/transfer', body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        await pollUser()
        return response.data.message
    } catch (error) {
        throw extractApiError(error)
    }
}

const transactionHistory = async () => {
    try {
        const accountNumber = store.getState().user.signIn.payLoad.accountNumber
        const resp = await Axios.get(`/history/${accountNumber}`)
        store.dispatch(updateTransactionHistory(resp.data.message))
    } catch (error) {
        extractApiError(error)
    }
}

const getBalance = async (accountNumber) => {
    try {
        const resp = await Axios.get(`/balance/${accountNumber}`)
        return resp.data.message
    } catch (error) {
        extractApiError(error)
    }
}

export { transactionHistory, transfer, getBalance }
