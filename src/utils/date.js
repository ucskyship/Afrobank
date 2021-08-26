const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const getFormatedDate = (date) => {
    const currentDate = new Date(date)
    const day = currentDate.getDay()
    const getDate = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const getHours = currentDate.getHours()
    const getMinutes =
        currentDate.getMinutes().toString().length < 2
            ? `0${currentDate.getMinutes()}`
            : currentDate.getMinutes()

    const getTimeOfTheDay = getHours < 12 ? 'am' : 'pm'

    const time = `${getHours}:${getMinutes} ${getTimeOfTheDay}`
    const formatedDay = `${daysOfTheWeek[day]} ${getDate} ${months[month]}, ${year}`
    return {
        time,
        formatedDay,
    }
}
export { getFormatedDate }
