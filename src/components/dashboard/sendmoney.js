import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'reactstrap'
import styled from 'styled-components'
import { transfer } from '../../services/transactions/index'
import { TransferForm } from '../forms/index'
import { PinModal } from '../../modals'

export const Type = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size}px;
`
const AccountCard = styled(Card)`
    height: 100%;
    min-height: 300px;
    width: 100%;
    margin-top: 100px;
    margin-bottom: 50px;
    border-radius: 10px;
    transition: all ease 0.3s;
`

const DashbodyCard = styled.div`
    width: 100%;
    background: #000000;
    border-radius: 10px;
    height: 100%;
    min-height: 560px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`
const SendMoney = (props) => {
    const [formLoading, setFormLoading] = useState(false)
    const [error, setError] = useState('')
    const [pin, setPin] = useState('')
    const [pinModal, setPinModal] = useState(false)

    let formikForm = useRef()

    const handleSubmit = async () => {
        const { accountNumber } = props.payLoad

        setFormLoading(true)
        setError('')
        try {
            await transfer({ ...formikForm.current.values }, accountNumber, pin)
            setFormLoading(false)
            setPinModal(false)
        } catch (error) {
            setError(error)
            setFormLoading(false)
        }
    }

    const toggleVisibility = () => {
        setPinModal(!pinModal)
    }

    useEffect(() => {}, [formikForm])

    return (
        <Col
            style={{
                height: '100vh',
                position: 'relative',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
        >
            <PinModal
                centered
                isVisible={pinModal}
                error={error}
                isLoading={formLoading}
                toggleVisibility={() => {
                    toggleVisibility()
                    setError('')
                }}
                payLoad={props.payLoad}
                onChange={(e) => setPin(e)}
                onSubmit={() => handleSubmit()}
            />
            <Row>
                <Col lg={12}>
                    <div className="d-flex pt-4 align-items-center">
                        <Type
                            size="25"
                            className="font-weight-bold mobile_pl"
                            color="white"
                        >
                            Send money
                        </Type>
                    </div>
                </Col>
            </Row>
            <DashbodyCard className="mt-5">
                <Col
                    xl={6}
                    className="d-flex justify-content-center align-items-center m-auto"
                >
                    <AccountCard className="pr-3 pl-3 pt-3">
                        <TransferForm
                            innerRef={formikForm}
                            formSubmit={toggleVisibility}
                            error={error}
                            balance={props.payLoad.accountBalance}
                        />
                    </AccountCard>
                </Col>
            </DashbodyCard>
        </Col>
    )
}

const mapStateToProps = (state) => ({
    payLoad: state.user.signIn.payLoad,
    balanceDisplay: state.user.balanceDisplay,
})
export default connect(mapStateToProps, {})(SendMoney)
