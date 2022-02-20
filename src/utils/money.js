const formatMoney = (amount = 0) => {
    const newAmount = typeof amount === 'string' ? +amount : amount
    const money = newAmount.toFixed(2)
    return `₦ ${money}`
}
const sumAmount = (transactions) => {
    return transactions.reduce((a, b) => +a + +b.amount || 0, 0)
}

const calculateAllDebit = (transactions = []) => {
    const allDebits = transactions.filter(
        (data) => data.transaction_type === 'debit'
    )
    const totalDebits = sumAmount(allDebits)

    return formatMoney(totalDebits)
}

export { formatMoney, calculateAllDebit }
