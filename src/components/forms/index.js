import { Formik } from 'formik'
import React from 'react'
import { TextField, Box, makeStyles } from '@material-ui/core'
import {
    loginSchema,
    transferSchema,
    signUpSchema,
    forgotPasswordSchema,
} from './validation'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Form } from 'reactstrap'
import { Button as Btn, CustomInputs } from '../../globalcomponents'

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    font-weight: 600;
`
const Error = styled.p`
    color: red;
    font-weight: 600;
    text-align: start;
    font-size: 12px;
`

const style = makeStyles(() => ({
    Input: {
        height: 40,
        width: '100%',
        marginBottom: 40,
        outline: 'none',
    },
}))

const Button = (props) => {
    return <Btn bg="#065340" color="white" width={250} height={50} {...props} />
}
const LoginForm = (props) => {
    const initialValues = {
        email: '',
        password: '',
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            validateOnBlur={false}
            validateOnChange={true}
            onSubmit={(e) => props.handleSubmit(e)}
        >
            {({ errors, handleChange, values, handleSubmit }) => {
                return (
                    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        {!!props.error && (
                            <p style={{ color: 'red' }}>{props.error}</p>
                        )}
                        <div>
                            <CustomInputs
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                label="Email"
                                autoComplete="false"
                                style={{
                                    border: `1px solid ${
                                        !!errors.email || !!props.error
                                            ? 'red'
                                            : 'green'
                                    }`,
                                }}
                            />
                            {!!errors.email && (
                                <span style={{ color: 'red' }}>
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="pt-3">
                            <CustomInputs
                                type="password"
                                name="password"
                                onChange={handleChange}
                                label="Password"
                                value={values.password}
                                style={{
                                    border: `1px solid ${
                                        !!errors.password || !!props.error
                                            ? 'red'
                                            : 'green'
                                    }`,
                                }}
                                autoComplete="false"
                            />
                            {!!errors.password && (
                                <p style={{ color: 'red' }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="d-flex justify-content-end align-items-center pt-3">
                            <Link
                                style={{
                                    color: 'grey',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                                to="/forgotpassword"
                            >
                                forgot password
                            </Link>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                            <Button
                                className="mt-2 rounded-pill"
                                type="submit"
                                disabled={props.formLoading}
                                text={
                                    props.formLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="white"
                                        />
                                    ) : (
                                        'Sign In'
                                    )
                                }
                            />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

const ForgotPasswordForm = (props) => {
    const initialValues = {
        email: '',
    }

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur={false}
            validateOnChange={true}
            validationSchema={forgotPasswordSchema}
            onSubmit={props.handleSubmit}
        >
            {({ errors, handleChange, values, handleSubmit }) => {
                return (
                    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <CustomInputs
                            onChange={handleChange}
                            value={values.email}
                            className="mb-2"
                            label="Email"
                            type="email"
                            name="email"
                            style={{
                                border: `1px solid ${
                                    !!errors.email ? 'red' : 'green'
                                }`,
                            }}
                        />
                        {!!errors.email && (
                            <ErrorText>{errors.email}</ErrorText>
                        )}

                        <div className="d-flex justify-content-end align-items-center pt-3">
                            <Link
                                style={{
                                    color: 'grey',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                                to="/signin"
                            >
                                remember now ?
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <Button
                                type="submit"
                                className="mt-2 rounded-pill"
                                text="Send"
                            />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}
const TransferForm = (props) => {
    const initialValues = {
        recipient: '',
        amount: '',
    }

    return (
        <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialValues}
            validationSchema={transferSchema}
            onSubmit={props.formSubmit}
        >
            {({ errors, handleChange, handleSubmit, values }) => {
                const isValidBalance = +values.amount > +props.balance
                return (
                    <Form onSubmit={handleSubmit}>
                        {!!props.error && <ErrorText>{props.error}</ErrorText>}
                        <CustomInputs
                            type="number"
                            name="recipient"
                            label="recipient"
                            onChange={handleChange}
                        />{' '}
                        {!!errors.recipient && (
                            <Error>{errors.recipient}</Error>
                        )}
                        <CustomInputs
                            type="number"
                            name="amount"
                            label="amount"
                            onChange={handleChange}
                        />
                        {!!errors.amount && <Error>{errors.amount}</Error>}
                        <div className="d-flex justify-content-end align-items-center">
                            {isValidBalance && (
                                <ErrorText>insufficient balance</ErrorText>
                            )}
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Button
                                disabled={isValidBalance}
                                type="submit"
                                color="white"
                                className="mt-3 mb-2 rounded-pill"
                                text={
                                    props.formLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="#00BFFF"
                                        />
                                    ) : (
                                        'send'
                                    )
                                }
                            />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

const SignUpForm = (props) => {
    const initialValues = {
        firstName: '',
        surName: '',
        lastName: '',
        email: '',
        gender: '',
        password: '',
        phoneNumber: '',
    }

    return (
        <Formik
            validationSchema={signUpSchema}
            initialValues={initialValues}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={props.handleSubmit}
        >
            {({ errors, handleChange, handleSubmit, values }) => {
                return (
                    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        {!!props.regError && (
                            <ErrorText>{props.regError}</ErrorText>
                        )}
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <CustomInputs
                                    label="First name"
                                    value={values.firstName}
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                />
                                {!!errors.firstName && (
                                    <ErrorText>{errors.firstName}</ErrorText>
                                )}
                            </div>
                            <div>
                                <CustomInputs
                                    value={values.surName}
                                    label="Surname"
                                    type="text"
                                    name="surName"
                                    onChange={handleChange}
                                />
                                {!!errors.surName && (
                                    <ErrorText>{errors.surName}</ErrorText>
                                )}
                            </div>
                        </div>

                        <CustomInputs
                            value={values.lastName}
                            label="Last name"
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            className="mb-2"
                        />
                        {!!errors.lastName && (
                            <ErrorText>{errors.lastName}</ErrorText>
                        )}

                        <CustomInputs
                            onChange={handleChange}
                            value={values.email}
                            className="mb-2"
                            label="Email"
                            type="email"
                            name="email"
                        />
                        {!!errors.email && (
                            <ErrorText>{errors.email}</ErrorText>
                        )}
                        <CustomInputs
                            value={values.password}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className="mb-2"
                        />
                        {!!errors.password && (
                            <ErrorText>{errors.password}</ErrorText>
                        )}
                        <CustomInputs
                            type="text"
                            label="Phone number"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
                            className="mb-2"
                        />
                        {!!errors.phoneNumber && (
                            <ErrorText>{errors.phoneNumber}</ErrorText>
                        )}

                        <CustomInputs
                            label="Gender"
                            style={{
                                width: '80%',
                            }}
                            type="select"
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                            className="mb-2"
                        >
                            <option value="">select gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </CustomInputs>
                        {!!errors.gender && (
                            <ErrorText>{errors.gender}</ErrorText>
                        )}

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <Button
                                type="submit"
                                className="mt-2 rounded-pill"
                                text={
                                    props.formLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="#00BFFF"
                                        />
                                    ) : (
                                        'create account'
                                    )
                                }
                            />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

LoginForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
    error: propTypes.string,
    formLoading: propTypes.bool.isRequired,
}
TransferForm.propTypes = {
    formSubmit: propTypes.func.isRequired,
    error: propTypes.string.isRequired,
    formLoading: propTypes.bool.isRequired,
    balance: propTypes.any.isRequired,
}
export { LoginForm, TransferForm, SignUpForm, ForgotPasswordForm }
