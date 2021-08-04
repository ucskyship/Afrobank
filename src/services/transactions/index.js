import Axios from '../index'

const transfer = async (payload) => {
    const { recipient, amount, pin, sender } = payload
    const body = {
        recipient: recipient.toString(),
        amount: amount.toString(),
        pin: pin.toString(),
        sender: sender.toString(),
    }
    try {
        const response = await Axios.post('/transfer', body)
        return response.data.message
    } catch (error) {
        throw error
    }
}

const transactionHistory = async (accountNumber) => {
    try {
        const resp = await Axios.get(`/history/${accountNumber}`)
        return resp.data.message
    } catch (error) {
        throw error.response
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
