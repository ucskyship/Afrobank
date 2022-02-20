import Axios from '../index'
import { extractApiError } from '../../utils/error'

const transfer = async (payload, sender, pin) => {
    const { recipient, amount } = payload
    const body = {
        recipient: recipient.toString(),
        amount,
        sender: sender.toString(),
        pin,
    }
    try {
        const response = await Axios.post('/transfer', body)
        return response.data.message
    } catch (error) {
        throw extractApiError(error)
    }
}

const transactionHistory = async (accountNumber, updateTransactionHistory) => {
    try {
        const resp = await Axios.get(`/history/${accountNumber}`)
        updateTransactionHistory(resp.data.message)
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
