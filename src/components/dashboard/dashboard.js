import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { transactionHistory } from '../../services/transactions'
import { Col, Row, Table } from 'reactstrap'
import {
    updateTransactionHistory,
    toggleDisplay,
} from '../../services/appstore/actions/actions'
import {
    getFormatedDate,
    calculateAllDebit,
    formatMoney,
    getFormatedTime,
} from '../../utils'
import { Person, ShowChart, FileCopy } from '@material-ui/icons'

import styled from 'styled-components'

const AccountCard = styled.div`
    height: 250px;
    width: 100%;
    border-radius: 10px;
    background: #0d3153;
    background-image: url(${(props) => props.img});
    transition: all ease 0.3s;
`

export const Dashbody = styled.div`
    height: 100%;
    background: #0f0f0fe5;
`
export const Type = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size}px;
`

const Text = styled.h5`
    color: white;
    font-size: 24px;
    font-weight: 550;
`

const Dashboard = (props) => {
    const data = useSelector((state) => state.user)
    const { payLoad, transactions } = props

    const renderTransactions = () => {
        return transactions.map((transaction, i) => {
            const {
                transaction_id,
                amount,
                transaction_date,
                transaction_type,
            } = transaction

            const formatDay = getFormatedDate(transaction_date)
            const formatTime = getFormatedTime(transaction_date)
            return (
                <tr key={i}>
                    <td>{transaction_id}</td>
                    <td
                        style={{
                            color: `${
                                transaction_type === 'credit' ? 'green' : 'red'
                            }`,
                            fontWeight: 600,
                        }}
                    >
                        {formatMoney(amount)}
                    </td>
                    <td
                        style={{
                            color: `${
                                transaction_type === 'credit' ? 'green' : 'red'
                            }`,
                            fontWeight: 600,
                        }}
                    >
                        {transaction_type}
                    </td>
                    <td>{`${formatDay} ${formatTime}`}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        async function fetchData() {
            const { accountNumber } = data.signIn.payLoad

            try {
                await transactionHistory(
                    accountNumber,
                    props.updateTransactionHistory
                )
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [data.signIn.payLoad, props.updateTransactionHistory])

    console.log(props)
    return (
        <Col className="p-0 m-0">
            <Text className="pt-4">Dashboard</Text>
            <Text
                style={{ color: 'whitesmoke', fontSize: '18px', opacity: 0.3 }}
            >
                Account updates
            </Text>
            <Col lg={10} className="p-0 pt-4">
                <Row className="d-flex justify-content-between">
                    <Col xl={4}>
                        <AccountCard className="d-flex flex-column justify-content-center align-items-center bg-dark">
                            <Person
                                fontSize="large"
                                style={{ color: 'white' }}
                            />
                            <Text
                                className="pt-3"
                                style={{
                                    color: 'whitesmoke',
                                    fontSize: '14px',
                                    opacity: 0.3,
                                }}
                            >
                                {`Name: ${payLoad.firstName.toUpperCase()} ${payLoad.lastName.toUpperCase()}`}
                            </Text>
                        </AccountCard>
                    </Col>
                    <Col xl={3}>
                        <AccountCard className="d-flex flex-column justify-content-center align-items-center bg-dark">
                            <ShowChart
                                style={{ color: 'white', fontSize: '40px' }}
                            />
                            <Text
                                className="pt-3"
                                style={{
                                    color: 'whitesmoke',
                                    fontSize: '14px',
                                    opacity: 0.5,
                                }}
                            >
                                {`You've spent ${calculateAllDebit(
                                    data.transactions
                                )} so far`}
                            </Text>
                        </AccountCard>
                    </Col>
                    <Col xl={5}>
                        <AccountCard className="bg-dark d-flex justify-content-center align-items-center">
                            <FileCopy
                                style={{ cursor: 'pointer', color: 'white' }}
                            />
                            <Text
                                className="pl-2 pt-3 font-weight-bold"
                                style={{
                                    color: 'white',
                                    letterSpacing: '0.7rem',
                                    fontSize: '20px',
                                }}
                            >
                                {payLoad.accountNumber} <br />
                            </Text>
                        </AccountCard>
                    </Col>
                </Row>
            </Col>
            <Col lg={10} className="p-0 pt-4">
                <Text
                    style={{
                        color: 'whitesmoke',
                        fontSize: '18px',
                        opacity: 0.3,
                    }}
                >
                    Balance
                </Text>
                <Text className="pt-1">
                    {formatMoney(payLoad.accountBalance)}
                </Text>
                <Col
                    style={{ height: '350px' }}
                    className="p-0 rounded bg-dark pt-2"
                ></Col>
            </Col>
            <Col lg={10} className="p-0 pt-3">
                <Text
                    style={{
                        color: 'whitesmoke',
                        fontSize: '18px',
                        opacity: 0.3,
                    }}
                >
                    History
                </Text>
                <Col className="p-0">
                    {!!data.transactions && data.transactions.length > 0 ? (
                        <Table
                            className="p-0"
                            style={{ overflowY: 'scroll' }}
                            striped
                            responsive
                            borderless
                        >
                            <thead style={{ color: 'whitesmoke' }}>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Date/Time</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: 'white' }}>
                                {renderTransactions()}
                            </tbody>
                        </Table>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                            <Text className="is-center">
                                You don't have any transactions
                            </Text>
                        </div>
                    )}
                </Col>
            </Col>
        </Col>
    )
}

const mapStateToProps = (state) => ({
    balanceDisplay: state.user.balanceDisplay,
    payLoad: state.user.signIn.payLoad,
    transactions: state.user.transactions,
})

export default connect(mapStateToProps, {
    updateTransactionHistory,
    toggleDisplay,
})(Dashboard)
