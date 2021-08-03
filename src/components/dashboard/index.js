import React from 'react'
import { connect } from 'react-redux'
import TransferModal from '../../modals'
import { transactionHistory } from '../../services/transactions'
import { TrendingDown, TrendingUp } from '@material-ui/icons'
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
    width: 25%;
    height: 50px;
    border: none;
    outline: none;
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
        this.state = { toggleTransferModal: false, AllTransactionHistory: [] }
    }

    componentDidMount = async () => {
        const { accountNumber } = this.props.payLoad

        this.setState({
            AllTransactionHistory: await transactionHistory(accountNumber),
        })
    }
    toggleModal = () => {
        this.setState({ toggleTransferModal: !this.state.toggleTransferModal })
    }
    render() {
        const { firstName, accountNumber, surName } = this.props.payLoad
        const { toggleTransferModal, AllTransactionHistory } = this.state
        console.log(this.props)
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
                    <Col className="mt-5">
                        <Row>
                            <Col xl={5}>
                                <AccountCard className="pt-4">
                                    <Container>
                                        <h4 style={{ color: 'white' }}>
                                            current balance
                                        </h4>
                                        <p style={{ color: 'white' }}>
                                            Account number {accountNumber}
                                        </p>
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
                            Transfer money
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
                                AllTransactionHistory.map((data, i) => (
                                    <div
                                        className="d-flex justify-content-between"
                                        key={i}
                                    >
                                        <h5 className="pb-2 pt-2">
                                            {data.transaction_date}
                                        </h5>
                                        <Type
                                            color={
                                                data.transaction_type ===
                                                'credit'
                                                    ? 'green'
                                                    : 'red'
                                            }
                                        >
                                            <h5 className="d-flex">
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
                                            </h5>
                                        </Type>
                                    </div>
                                ))}
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
