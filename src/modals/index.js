import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { TransferForm } from '../components/forms'
import AlertModals from './alertModals'
import styled from 'styled-components'
import { transfer } from '../services/transactions'

const P = styled.p`
    color: #0d3153;
    font-size: 23px;
    font-weight: 500;
`

class TransferModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formLoading: false,
            show: false,
            transferError: '',
        }
    }
    handleSubmit = async (values) => {
        const { accountNumber } = this.props
        this.setState({
            formLoading: true,
        })
        const body = {
            sender: accountNumber,
            ...values,
        }
        console.log(body)

        try {
            await transfer(body)
            this.setState({
                formLoading: false,
            })
        } catch (error) {
            this.setState({
                transferError: error.response.data.message,
                formLoading: false,
                show: true,
            })
        }
    }

    render() {
        const { transferError, show } = this.state
        return (
            <SweetAlert
                title=""
                show={this.props.show}
                showConfirm={false}
                onConfirm={this.props.confirm}
            >
                {transferError && (
                    <AlertModals
                        danger
                        show={show}
                        text="failed transfer"
                        title={transferError}
                        onConfirm={() => this.setState({ transferError: '' })}
                    />
                )}

                <div className="mb-3 d-flex align-items-center justify-content-center">
                    <P>Transfer</P>
                </div>
                {TransferForm(this.handleSubmit, this.state.formLoading)}
            </SweetAlert>
        )
    }
}
TransferModal.propTypes = {
    show: propTypes.bool.isRequired,
    confirm: propTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    accountNumber: state.user.signIn.payLoad.accountNumber,
})

export default connect(mapStateToProps, {})(TransferModal)
