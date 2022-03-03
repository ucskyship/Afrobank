import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { transactionHistory, getBalance } from '../../services/transactions'
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
import { Person, ShowChart, CreditCard } from '@material-ui/icons'
import Card from '../../assets/images/cvv.png'

import styled from 'styled-components'

const AccountCard = styled.div`
    height: 250px;
    width: 250px;
    border-radius: 10px;
    background: #0d3153;
    background-image: url(${(props) => props.img});
    transition: all ease 0.3s;
`

export const Dashbody = styled.div`
    overflow: hidden;
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
    const [state, setState] = useState({
        toggleTransferModal: false,
        balance: 0,
        displayBal: true,
        balanceLoading: false,
    })
    const data = useSelector((state) => state.user)

    const pageBalance = async () => {
        const { accountNumber } = data.signIn.payLoad
        setState({
            balanceLoading: true,
        })
        try {
            const balance = await getBalance(accountNumber)
            await transactionHistory(
                accountNumber,
                props.updateTransactionHistory
            )
            setState({
                balance: balance,
                balanceLoading: false,
            })
        } catch (error) {
            setState({
                balanceLoading: false,
            })
            throw error
        }
    }

    const toggleVisibility = () => {
        setState({ ...state, displayBal: !state.displayBal })
        props.toggleDisplay(state.displayBal)
    }

    const renderTransactions = () => {
        const { transactions } = data
        return transactions.slice(0, 4).map((transaction, i) => {
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
            setState({
                balanceLoading: true,
            })
            try {
                await transactionHistory(
                    accountNumber,
                    props.updateTransactionHistory
                )
                setState({
                    balanceLoading: false,
                })
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [data.signIn.payLoad, props.updateTransactionHistory])

    return (
        <Col
            className="p-0 m-0"
            style={{
                height: '100vh',
                position: 'relative',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
        >
            <Text className="pt-4">Dashboard</Text>
            <Text
                style={{ color: 'whitesmoke', fontSize: '18px', opacity: 0.3 }}
            >
                Account updates
            </Text>
            <Col lg={10} className="p-0 pt-4">
                <Row className="d-flex justify-content-between">
                    <Col>
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
                                {`Name: ${data.signIn.payLoad.firstName} ${data.signIn.payLoad.lastName}`}
                            </Text>
                        </AccountCard>
                    </Col>
                    <Col>
                        <AccountCard className="bg-dark">1</AccountCard>
                    </Col>
                    <Col>
                        <AccountCard className="bg-dark d-flex flex-column justify-content-center align-items-center">
                            <img src={Card} alt={Card} height="50" width="50" />
                            {/* <CreditCard
                                style={{ color: 'white', fontSize: '40px' }}
                            /> */}
                            <Text
                                className="pt-3"
                                style={{
                                    color: 'whitesmoke',
                                    fontSize: '14px',
                                    opacity: 0.5,
                                }}
                            >
                                {`Account Number: ${data.signIn.payLoad.accountNumber}`}
                            </Text>
                        </AccountCard>
                    </Col>
                    <Col>
                        <AccountCard className="bg-dark d-flex flex-column justify-content-center align-items-center">
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
                    {formatMoney(data.signIn.payLoad.accountBalance)}
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
})
export default connect(mapStateToProps, {
    updateTransactionHistory,
    toggleDisplay,
})(Dashboard)
