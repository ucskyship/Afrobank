import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TransferModal from '../../modals'
import { transactionHistory, getBalance } from '../../services/transactions'
import { Autorenew } from '@material-ui/icons'
import { Container, Col, Row, Table } from 'reactstrap'
import styled from 'styled-components'

const AccountCard = styled.div`
    height: 150px;
    width: 100%;
    border-radius: 10px;
    background: #0d3153;
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
    }
`
const Dashbody = styled.div`
    height: 100%;
    background: #000000bb;
`
const DashbodyCard = styled.div`
    width: 100%;
    background: #000000;
    border-radius: 10px;
`
const Nametag = styled.div`
    height: 40px;
    width: 120px;
    background: #cdc7ce;
`

const Type = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size}px;
`

const Dashboard = (props) => {
    const [state, setState] = useState({
        toggleTransferModal: false,
        AllTransactionHistory: [],
        balance: 0,
    })

    const formatDate = (date) => {
        const day = new Date(date).toLocaleDateString()
        const time = new Date(date).toLocaleTimeString()

        return {
            day,
            time,
        }
    }

    useEffect(() => {
        async function fetchData() {
            const { accountNumber } = props.payLoad

            const balance = await getBalance(accountNumber)
            const history = await transactionHistory(accountNumber)
            console.log(history)
            setState({
                balance: balance,
                AllTransactionHistory: history,
            })
        }
        fetchData()
    }, [props.payLoad])

    const toggleModal = () => {
        setState({ toggleTransferModal: !state.toggleTransferModal })
    }

    return (
        <Dashbody className="pb-4">
            <Container>
                <Col>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <div className="d-flex justify-content-between pt-4">
                                <Type
                                    size="25"
                                    className="font-weight-bold"
                                    color="white"
                                >
                                    Dashboard
                                </Type>
                            </div>
                            <DashbodyCard className="pb-3 pt-3 mt-5">
                                <Container className="pr-5 pl-5">
                                    <Type color="white" className="pt-3 mb-4">
                                        Account overview
                                    </Type>
                                    <Row className="pt-3">
                                        <Col lg={4}>
                                            <AccountCard
                                                style={{
                                                    background: '#4004af',
                                                    color: 'white',
                                                }}
                                            >
                                                <Container>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Type size="30">₦</Type>
                                                        <Autorenew />
                                                    </div>
                                                    <Type
                                                        size="30"
                                                        style={{
                                                            position:
                                                                'absolute',
                                                            top: '70%',
                                                            right: '10%',
                                                        }}
                                                    >
                                                        {state.balance}
                                                    </Type>
                                                </Container>
                                            </AccountCard>
                                        </Col>
                                        <Col lg={4}>
                                            <AccountCard
                                                style={{
                                                    background: '#f707eb',
                                                    color: 'white',
                                                }}
                                            >
                                                <Container>
                                                    <Type
                                                        size="20"
                                                        className="pt-5"
                                                    >
                                                        Account Details
                                                    </Type>
                                                    <br />
                                                    <Type
                                                        size="12"
                                                        style={{
                                                            position:
                                                                'absolute',
                                                            top: '60%',
                                                            fontWeight: 550,
                                                        }}
                                                    >
                                                        Name:{' '}
                                                        {`${props.payLoad.firstName} ${props.payLoad.surName}`}
                                                    </Type>
                                                    <br />
                                                    <Type
                                                        style={{
                                                            position:
                                                                'absolute',
                                                            top: '75%',
                                                            fontWeight: 550,
                                                        }}
                                                    >
                                                        Account Number:{' '}
                                                        {
                                                            props.payLoad
                                                                .accountNumber
                                                        }
                                                    </Type>
                                                </Container>
                                            </AccountCard>
                                        </Col>
                                        <Col lg={4}>
                                            <AccountCard></AccountCard>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between pt-4">
                                        <Type size="18" color="white">
                                            Transactions
                                        </Type>
                                        <Type color="green">Show all</Type>
                                    </div>
                                    <div className="pt-3">
                                        <Table striped responsive borderless>
                                            <thead
                                                style={{ color: 'whitesmoke' }}
                                            >
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Transaction ID</th>
                                                    <th>Amount</th>
                                                    <th>Type</th>
                                                    <th>Date/Time</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ color: 'white' }}>
                                                {!!state.AllTransactionHistory &&
                                                    state.AllTransactionHistory.map(
                                                        (req, idx) => {
                                                            const {
                                                                transaction_id,
                                                                amount,
                                                                transaction_date,
                                                                transaction_type,
                                                            } = req
                                                            const formatedDate =
                                                                formatDate(
                                                                    transaction_date
                                                                )
                                                            return (
                                                                <tr key={idx}>
                                                                    <td>
                                                                        {idx}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            transaction_id
                                                                        }
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            color: `${
                                                                                transaction_type ===
                                                                                'credit'
                                                                                    ? 'green'
                                                                                    : 'red'
                                                                            }`,
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        ₦
                                                                        {amount}
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            color: `${
                                                                                transaction_type ===
                                                                                'credit'
                                                                                    ? 'green'
                                                                                    : 'red'
                                                                            }`,
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        {transaction_type ===
                                                                        'credit'
                                                                            ? 'CR'
                                                                            : 'DR'}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            formatedDate.day
                                                                        }
                                                                        ,
                                                                        {
                                                                            formatedDate.time
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    )}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Container>
                            </DashbodyCard>
                        </Col>
                        <Col lg={1}>
                            <div className="d-flex align-items-center">
                                <Nametag>{props.payLoad.firstName}</Nametag>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Container>

            <TransferModal
                show={state.toggleTransferModal}
                confirm={() => toggleModal()}
            />
        </Dashbody>
    )
}

const mapStateToProps = (state) => ({
    payLoad: state.user.signIn.payLoad,
})

export default connect(mapStateToProps, {})(Dashboard)
