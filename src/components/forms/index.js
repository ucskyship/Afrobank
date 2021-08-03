import { Formik } from 'formik'
import React from 'react'
import { loginSchema, transferSchema } from './validation'

import styled from 'styled-components'
import LoadingOverlay from 'react-loading-overlay'

const Input = styled.input`
    border: 1px solid black;
    border-radius: 12px;
    height: 50px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
`

const Button = styled.button`
    width: 70%;
    height: 50px;
    border: none;
    outline: none;
    color: white;
    background: #0d3153;
    border-radius: 7px;
`
const Error = styled.p`
    color: red;
    font-weight: 600;
    text-align: start;
    font-size: 12px;
`

const LoginForm = (handleSubmit, formLoading) => {
    const initialValues = {
        email: '',
        password: '',
    }

    const style = {
        width: '200px',
    }
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ errors, handleChange, handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="false"
                            style={style}
                        />
                        <br />
                        {!!errors.email && (
                            <p style={{ color: 'red' }}>{errors.email}</p>
                        )}
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="false"
                            style={style}
                        />
                        <br />
                        {!!errors.password && (
                            <p style={{ color: 'red' }}>{errors.password}</p>
                        )}
                        <Button type="submit">
                            {formLoading ? '...' : 'sign in'}
                        </Button>
                    </form>
                )
            }}
        </Formik>
    )
}

const TransferForm = (handleSubmit, formLoading) => {
    const initialValues = {
        recipient: '',
        amount: '',
        pin: '',
    }

    return (
        <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialValues}
            validationSchema={transferSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, handleChange, handleSubmit, values }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Input
                            className="mb-3"
                            type="number"
                            name="recipient"
                            placeholder="recipient"
                            onChange={handleChange}
                        />{' '}
                        {!!errors.recipient && (
                            <Error>{errors.recipient}</Error>
                        )}
                        <Input
                            type="number"
                            name="amount"
                            className="mb-3"
                            placeholder="enter amount"
                            onChange={handleChange}
                        />
                        {!!errors.amount && <Error>{errors.amount}</Error>}
                        <Input
                            // secret
                            className="mb-3"
                            type="number"
                            placeholder="enter pin"
                            onChange={handleChange}
                            name="pin"
                            maxLength={4}
                        />
                        {!!errors.pin && <Error>{errors.pin}</Error>}
                        <Button type="submit" className="mt-3 mb-2">
                            {formLoading ? (
                                <LoadingOverlay
                                    styles={{
                                        spinner: (base) => ({
                                            ...base,
                                            width: '20px',
                                            '& svg circle': {
                                                stroke: `white`,
                                            },
                                        }),
                                    }}
                                    spinner
                                    active={true}
                                />
                            ) : (
                                'send'
                            )}
                        </Button>
                    </form>
                )
            }}
        </Formik>
    )
}

export { LoginForm, TransferForm }
