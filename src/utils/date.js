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

const getCurrentDate = (date) => {
    return new Date(date)
}

const getFormatedTime = (date) => {
    const currentDate = getCurrentDate(date)
    const getHours = currentDate.getHours()
    const getMinutes =
        currentDate.getMinutes().toString().length < 2
            ? `0${currentDate.getMinutes()}`
            : currentDate.getMinutes()
    const getTimeOfTheDay = getHours < 12 ? 'am' : 'pm'
    const time = `${getHours}:${getMinutes} ${getTimeOfTheDay}`
    return time
}

const getTimeOfTheDay = () => {
    var timeOfTheDay
    const currentDay = new Date().getHours()
    if (currentDay < 12) {
        timeOfTheDay = 'Good morning'
    } else if (currentDay <= 15) {
        timeOfTheDay = 'Good afternoon'
    } else {
        timeOfTheDay = 'Good evening'
    }
    return timeOfTheDay
}
const getFormatedDate = (date) => {
    const currentDate = getCurrentDate(date)
    const day = currentDate.getDay()
    const getDate = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const formatedDay = `${daysOfTheWeek[day]} ${getDate} ${months[month]}, ${year}`
    return formatedDay
}
export { getFormatedDate, getFormatedTime, getTimeOfTheDay }
