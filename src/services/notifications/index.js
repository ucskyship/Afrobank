import Axios from '../index'

const fetchAllNotifications = async (accountNumber) => {
    try {
        const resp = await Axios.get(`/notifications/${accountNumber}`)
        return resp.data.message
    } catch (error) {
        throw error
    }
}

export { fetchAllNotifications }
