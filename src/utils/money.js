const formatMoney = (amount) => {
    const money = amount.toFixed(2)
    return `₦ ${money}`
}

export { formatMoney }
