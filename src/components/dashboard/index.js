import React from 'react'
import { connect } from 'react-redux'
import TransferModal from '../../modals'
import { transactionHistory } from '../../services/transactions'
import styled from 'styled-components'

const HistoryCard = styled.div`
    background: purple;
    width: 250px;
    border-radius: 10px;
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
        const { firstName, accountNumber } = this.props.payLoad
        const { toggleTransferModal, AllTransactionHistory } = this.state
        return (
            <div>
                <h1>hello {firstName}</h1>
                <p>Account number {accountNumber}</p>
                <button onClick={() => this.toggleModal()}>
                    Transfer money
                </button>
                <TransferModal
                    show={toggleTransferModal}
                    confirm={() => this.toggleModal()}
                />
                <HistoryCard>
                    {!!AllTransactionHistory &&
                        AllTransactionHistory.map((data, i) => (
                            <div key={i}>
                                {data.transaction_date}
                                <Type
                                    color={
                                        data.transaction_type === 'credit'
                                            ? 'green'
                                            : 'red'
                                    }
                                >
                                    {data.amount}
                                </Type>
                            </div>
                        ))}
                </HistoryCard>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    payLoad: state.user.signIn.payLoad,
})

export default connect(mapStateToProps, {})(Dashboard)
