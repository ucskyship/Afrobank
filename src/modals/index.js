import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import propTypes from 'prop-types'
import { TransferForm } from '../components/forms'

class AlertModals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SweetAlert
                {...this.props}
                title={this.props.title}
                onConfirm={this.props.onConfirm}
            >
                {this.props.text}
            </SweetAlert>
        )
    }
}

class TransferModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formLoading: false,
        }
    }
    handleSubmit = () => {
        this.setState({
            formLoading: true,
        })
    }

    render() {
        return (
            <SweetAlert title="" onConfirm={() => {}}>
                {TransferForm(this.handleSubmit, this.state.formLoading)}
            </SweetAlert>
        )
    }
}
AlertModals.propTypes = {
    text: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    onConfirm: propTypes.func.isRequired,
}

export { AlertModals, TransferModal }
