import Axios from '../index'

const fetchAllNotifications = async (accountNumber) => {
  try {
    const resp = await Axios.get(`/notifications/${accountNumber}`)
    return resp.data.message
  } catch (error) {
    throw error
  }
}

const deleteSingleNotification = async (id) => {
  try {
    console.log(id)
  } catch (error) {
    throw error
  }
}

export { fetchAllNotifications, deleteSingleNotification }
