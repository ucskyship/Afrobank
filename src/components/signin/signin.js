import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col } from 'reactstrap'
import { userLogin } from '../../services/authentication'
import { user_login } from '../../services/appstore/actions/actions'
import { LoginForm } from '../forms/index'
import Papa from 'papaparse'
import styled from 'styled-components'

const Text = styled.p`
    font-size: 30px;
    font-weight: 600;
    color: grey;
`

const SignIn = (props) => {
    const [state, setState] = useState({
        error: '',
        formLoading: false,
    })
    const [data, setData] = useState([])

    const processInfo = (resData) => {
        console.log(resData.data)
        setData(resData.data)
    }

    const handleChange = (e) => {
        const file = e.target.files[0]
        Papa.parse(file, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: processInfo,
        })
    }

    const handleSubmit = async (value) => {
        setState({
            formLoading: true,
            error: '',
        })
        try {
            await userLogin(value, props.user_login)
            setState({
                formLoading: false,
            })
            props.history.push('/dashboard')
        } catch (error) {
            setState({
                error: error || 'An error occured',
                formLoading: false,
            })
        }
    }

    return (
        <Col
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: '100vh' }}
        >
            <Col lg={4} xs={11}>
                <Text className="text-center">sign in to start enjoying</Text>
                <LoginForm
                    handleSubmit={handleSubmit}
                    formLoading={state.formLoading}
                    error={state.error}
                />
            </Col>
            {/* <Col className="bg-dark" style={{ height: '160px' }}></Col> */}
        </Col>
    )
}

export default connect(null, { user_login })(SignIn)
