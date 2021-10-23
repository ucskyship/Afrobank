import { Formik } from 'formik'
import React from 'react'
import { TextField, Box, MenuItem, makeStyles } from '@material-ui/core'
import { loginSchema, transferSchema, signUpSchema } from './validation'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button as Btn } from '../../globalcomponents'

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

const Input = (props) => {
    const classes = style()
    return (
        <TextField
            fullWidth
            className={classes.Input}
            variant="outlined"
            {...props}
        />
    )
}

const Button = (props) => {
    return <Btn bg="#0d3153" color="white" width={150} height={40} {...props} />
}
const LoginForm = (props) => {
    const initialValues = {
        email: '',
        password: '',
    }

    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={props.handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ errors, handleChange, handleSubmit }) => {
                return (
                    <div
                        style={{ width: '70%' }}
                        className="m-auto d-flex justify-content-center"
                    >
                        <Box
                            component="form"
                            autoComplete="off"
                            sx={{
                                width: 700,
                                maxWidth: '100%',
                            }}
                            onSubmit={handleSubmit}
                        >
                            {!!props.error && (
                                <p style={{ color: 'red' }}>{props.error}</p>
                            )}
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                label="Email"
                                autoComplete="false"
                            />
                            <br />
                            {!!errors.email && (
                                <p style={{ color: 'red' }}>{errors.email}</p>
                            )}
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                label="Password"
                                autoComplete="false"
                            />
                            <br />
                            {!!errors.password && (
                                <p style={{ color: 'red' }}>
                                    {errors.password}
                                </p>
                            )}
                            <Button
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
                                        'sign in'
                                    )
                                }
                                type="submit"
                            />

                            <Link to="/register">register</Link>
                        </Box>
                    </div>
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
                    <Box
                        component="form"
                        autoComplete="off"
                        sx={{
                            width: 700,
                            maxWidth: '100%',
                        }}
                        onSubmit={handleSubmit}
                    >
                        {!!props.error && <ErrorText>{props.error}</ErrorText>}
                        <Input
                            type="number"
                            name="recipient"
                            label="recipient"
                            onChange={handleChange}
                        />{' '}
                        {!!errors.recipient && (
                            <Error>{errors.recipient}</Error>
                        )}
                        <Input
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
                                style={{
                                    width: '170px',
                                }}
                                className="mt-3 mb-2 rounded-pill"
                            >
                                {props.formLoading ? (
                                    <Loader
                                        type="ThreeDots"
                                        height={30}
                                        width={30}
                                        color="#00BFFF"
                                    />
                                ) : (
                                    'send'
                                )}
                            </Button>
                        </div>
                    </Box>
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

    const style = {
        height: '32px',
        width: '95%',
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
                    <div
                        style={{ width: '70%' }}
                        className="m-auto d-flex justify-content-center"
                    >
                        <Box
                            component="form"
                            autoComplete="off"
                            sx={{
                                width: 700,
                                maxWidth: '100%',
                            }}
                            onSubmit={handleSubmit}
                        >
                            {!!props.regError && (
                                <ErrorText>{props.regError}</ErrorText>
                            )}
                            <Input
                                label="First name"
                                value={values.firstName}
                                type="text"
                                style={style}
                                name="firstName"
                                onChange={handleChange}
                            />
                            {!!errors.firstName && (
                                <ErrorText>{errors.firstName}</ErrorText>
                            )}
                            <Input
                                value={values.surName}
                                label="Surname"
                                type="text"
                                style={style}
                                name="surName"
                                onChange={handleChange}
                            />
                            {!!errors.surName && (
                                <ErrorText>{errors.surName}</ErrorText>
                            )}
                            <Input
                                value={values.lastName}
                                label="Last name"
                                type="text"
                                style={style}
                                name="lastName"
                                onChange={handleChange}
                            />
                            {!!errors.lastName && (
                                <ErrorText>{errors.lastName}</ErrorText>
                            )}

                            <Input
                                onChange={handleChange}
                                value={values.email}
                                label="Email"
                                type="email"
                                name="email"
                                style={style}
                            />
                            {!!errors.email && (
                                <ErrorText>{errors.email}</ErrorText>
                            )}
                            <Input
                                value={values.password}
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                style={style}
                            />
                            {!!errors.password && (
                                <ErrorText>{errors.password}</ErrorText>
                            )}
                            <Input
                                type="text"
                                label="Phone number"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                style={style}
                                name="phoneNumber"
                            />
                            {!!errors.phoneNumber && (
                                <ErrorText>{errors.phoneNumber}</ErrorText>
                            )}

                            <Input
                                label="Gender"
                                style={{
                                    width: '80%',
                                }}
                                select
                                name="gender"
                                value={values.gender}
                                onChange={handleChange}
                            >
                                <MenuItem value="male">male</MenuItem>
                                <MenuItem value="female">female</MenuItem>
                            </Input>
                            {!!errors.gender && (
                                <ErrorText>{errors.gender}</ErrorText>
                            )}
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
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
                            <div className="d-flex justify-content-center align-items-center">
                                <Link className="text-center pl-2" to="/signin">
                                    sign in
                                </Link>
                            </div>
                        </Box>
                    </div>
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
export { LoginForm, TransferForm, SignUpForm }
