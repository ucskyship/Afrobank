import { Formik } from 'formik'
import React from 'react'
import { loginSchema } from './validation'
import PinInput from 'react-pin-input'
import styled from 'styled-components'
import LoadingOverlay from 'react-loading-overlay'

const Input = styled.input`
    border: 1px solid black;
    border-radius: 12px;
    height: 50px;
    width: 100%;
    padding-left: 20px;
`

const Button = styled.button`
    width: 70%;
    height: 50px;
    border: none;
    outline: none;
    color: white;
    background: rgb(18, 32, 31);
    border-radius: 7px;
`

const LoginForm = (handleSubmit, formLoading) => {
    const initialValues = {
        email: '',
        password: '',
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
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="false"
                        />
                        <br />
                        {!!errors.email && (
                            <p style={{ color: 'red' }}>{errors.email}</p>
                        )}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="false"
                        />
                        <br />
                        {!!errors.password && (
                            <p style={{ color: 'red' }}>{errors.password}</p>
                        )}
                        <button type="submit">
                            {formLoading ? '...' : 'sign in'}
                        </button>
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
            onSubmit={handleSubmit}
        >
            {({ errors, handleChange, handleSubmit, values }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Input
                            className="mb-3"
                            type="text"
                            name="recipient"
                            placeholder="recipient"
                            onChange={handleChange}
                        />{' '}
                        <Input
                            type="text"
                            name="amount"
                            className="mb-3"
                            placeholder="enter amount"
                            onChange={handleChange}
                        />
                        <PinInput
                            length={4}
                            // secret
                            className="mb-3"
                            type="numeric"
                            onChange={() => handleChange}
                            name="pin"
                        />
                        <Button
                            className="mt-3"
                            onClick={() => console.log(values)}
                        >
                            {!formLoading ? (
                                <LoadingOverlay spinner active={true} />
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
