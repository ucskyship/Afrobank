import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'reactstrap'
import styled from 'styled-components'
import { getBalance, transfer } from '../../services/transactions/index'
import { TransferForm } from '../forms/index'

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
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const { accountNumber } = props.payLoad
        async function fetchBalance() {
            setBalance(await getBalance(accountNumber))
        }
        fetchBalance()
    }, [props.payLoad])

    const handleSubmit = async (values) => {
        const { accountNumber } = props.payLoad
        setFormLoading(true)
        setError('')
        try {
            await transfer(values, accountNumber)
            setFormLoading(false)
        } catch (error) {
            setError(error.message)
            setFormLoading(false)
        }
    }
    return (
        <Col style={{ height: '100%', maxheight: '530px' }}>
            <Row>
                <Col lg={12}>
                    <div className="d-flex pt-4 align-items-center">
                        <Type
                            size="25"
                            className="font-weight-bold"
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
                        {TransferForm(
                            handleSubmit,
                            formLoading,
                            error,
                            balance
                        )}
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
