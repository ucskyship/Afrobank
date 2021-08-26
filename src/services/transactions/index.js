import Axios from '../index'

const transfer = async (payload, sender) => {
    const { recipient, amount } = payload
    const body = {
        recipient: recipient.toString(),
        amount,
        sender: sender.toString(),
    }
    try {
        const response = await Axios.post('/transfer', body)
        return response.data.message
    } catch (error) {
        throw error.response.data
    }
}

const transactionHistory = async (accountNumber, updateTransactionHistory) => {
    try {
        const resp = await Axios.get(`/history/${accountNumber}`)
        updateTransactionHistory(resp.data.message)
    } catch (error) {
        throw error
    }
}

const getBalance = async (accountNumber) => {
    try {
        const resp = await Axios.get(`/balance/${accountNumber}`)
        return resp.data.message
    } catch (error) {
        throw error.response
    }
}

export { transactionHistory, transfer, getBalance }
