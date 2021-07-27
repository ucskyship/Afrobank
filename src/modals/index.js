import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { connect } from 'react-redux'
// import propTypes from 'prop-types'
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
        this.setState({
            formLoading: true,
        })
        try {
            await transfer(values)
            this.setState({
                formLoading: true,
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
            <SweetAlert title="" showConfirm={false} onConfirm={() => {}}>
                {show && (
                    <AlertModals
                        danger
                        show={show}
                        text="failed transfer"
                        title={transferError}
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

export default connect()(TransferModal)
