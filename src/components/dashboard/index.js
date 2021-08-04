import React from 'react'
import { connect } from 'react-redux'
import TransferModal from '../../modals'
import { transactionHistory, getBalance } from '../../services/transactions'
import { TrendingDown, TrendingUp, ArrowUpward } from '@material-ui/icons'
import { Container, Col, Row } from 'reactstrap'
import styled from 'styled-components'

const AccountCard = styled.div`
    width: 450px;
    height: 240px;
    border-radius: 10px;
    background: #0d3153;
`
const Nametag = styled.div`
    height: 40px;
    width: 120px;
    background: #cdc7ce;
`
const AssetsCard = styled.div`
    height: 240px;
    width: 200px;
    background: ${(props) => props.color};
    border-radius: 10px;
`
const HistoryCard = styled.div`
    background: #6f8991;
    width: 545px;
    border-radius: 10px;
`
const TransferBtn = styled.button`
    width: 17%;
    height: 50px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #0d3153;
    border-radius: 7px;
`
const Type = styled.span`
    color: ${(props) => props.color};
`

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleTransferModal: false,
            AllTransactionHistory: [],
            balance: 0,
        }
    }

    formatDate = (date) => {
        const day = new Date(date).toLocaleDateString()
        const time = new Date(date).toLocaleTimeString()

        return {
            day,
            time,
        }
    }
    componentDidMount = async () => {
        const { accountNumber } = this.props.payLoad
        const data = await getBalance(accountNumber)

        this.setState({
            AllTransactionHistory: await transactionHistory(accountNumber),
            balance: data,
        })
    }

    toggleModal = () => {
        this.setState({ toggleTransferModal: !this.state.toggleTransferModal })
    }
    render() {
        const { firstName, surName } = this.props.payLoad
        const { toggleTransferModal, AllTransactionHistory, balance } =
            this.state

        return (
            <div className="mb-4">
                <Container>
                    <Col className="pt-2">
                        <Row className="d-flex justify-content-between">
                            <Col xl={3}>
                                <h1>Overview</h1>
                            </Col>
                            <Col xl={6}>
                                <div className="d-flex justify-content-end">
                                    <Nametag className="d-flex justify-content-center align-items-center rounded-pill">
                                        <h6>{`${firstName} ${surName[0]}`}</h6>
                                    </Nametag>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12} className="mt-5">
                        <Row>
                            <Col xl={5}>
                                <AccountCard className="pt-4">
                                    <Container>
                                        <h4 style={{ color: 'white' }}>
                                            current balance{' '}
                                            <span
                                                style={{
                                                    color: `${
                                                        balance > 5000
                                                            ? 'green'
                                                            : 'red'
                                                    }`,
                                                    fontWeight: 600,
                                                    fontSize: '15px',
                                                }}
                                            >
                                                {`N ${balance}`}
                                            </span>
                                        </h4>
                                    </Container>
                                </AccountCard>
                            </Col>
                            <Col xl={6}>
                                <Row className="d-flex justify-content-between">
                                    <Col xl={2}>
                                        <AssetsCard color="#8d7a91"></AssetsCard>
                                    </Col>
                                    <Col xl={2}>
                                        <AssetsCard color="#0d3153"></AssetsCard>
                                    </Col>
                                    <Col xl={2}>
                                        <AssetsCard color="#c4aec9"></AssetsCard>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <div className="pt-3 pb-3">
                        <TransferBtn onClick={() => this.toggleModal()}>
                            <ArrowUpward /> Transfer money
                        </TransferBtn>
                    </div>
                    <Col xl={6}>
                        <Row className="d-flex align-items-center">
                            <Col xl={6}>
                                <h5>Recent activity</h5>
                            </Col>
                            <Col className="d-flex justify-content-end" xl={6}>
                                <h6>All activity</h6>
                            </Col>
                        </Row>
                    </Col>
                    <HistoryCard className="mt-3 pt-2 pb-2">
                        <Container>
                            {!!AllTransactionHistory &&
                                AllTransactionHistory.map((data, i) => {
                                    const { transaction_date } = data
                                    const formatedDate =
                                        this.formatDate(transaction_date)
                                    return (
                                        <div
                                            className="d-flex justify-content-between"
                                            key={i}
                                        >
                                            <p className="pb-1 pt-2">
                                                {formatedDate.day}
                                                <span className="pl-3">
                                                    {formatedDate.time}
                                                </span>
                                            </p>
                                            <Type
                                                color={
                                                    data.transaction_type ===
                                                    'credit'
                                                        ? 'green'
                                                        : 'red'
                                                }
                                            >
                                                <p className="d-flex">
                                                    {data.transaction_type ===
                                                    'credit' ? (
                                                        <TrendingUp />
                                                    ) : (
                                                        <TrendingDown />
                                                    )}
                                                    {data.transaction_type ===
                                                    'credit'
                                                        ? `+${data.amount}`
                                                        : `-${data.amount}`}
                                                </p>
                                            </Type>
                                        </div>
                                    )
                                })}
                        </Container>
                    </HistoryCard>
                </Container>

                <TransferModal
                    show={toggleTransferModal}
                    confirm={() => this.toggleModal()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    payLoad: state.user.signIn.payLoad,
})

export default connect(mapStateToProps, {})(Dashboard)
