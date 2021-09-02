import { Formik } from 'formik'
import React from 'react'
import { loginSchema, transferSchema, signUpSchema } from './validation'
import { Col } from 'reactstrap'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import propTypes from 'prop-types'

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    font-weight: 600;
`

const Input = styled.input`
    height: 50px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    margin-top: 7px;
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
const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: black;
`

const LoginForm = (props) => {
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
            onSubmit={props.handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ errors, handleChange, handleSubmit }) => {
                return (
                    <Col lg={12}>
                        <Col
                            lg={6}
                            className="d-flex justify-content-center align-items-center m-auto"
                        >
                            <form
                                className="bg-dark"
                                style={{ width: '3000px' }}
                                onSubmit={handleSubmit}
                            >
                                {!!props.error && (
                                    <p style={{ color: 'red' }}>
                                        {props.error}
                                    </p>
                                )}
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
                                    <p style={{ color: 'red' }}>
                                        {errors.email}
                                    </p>
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
                                    <p style={{ color: 'red' }}>
                                        {errors.password}
                                    </p>
                                )}
                                <Button type="submit">
                                    {props.formLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="#00BFFF"
                                        />
                                    ) : (
                                        'sign in'
                                    )}
                                </Button>
                            </form>
                        </Col>
                    </Col>
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
                return (
                    <form onSubmit={handleSubmit}>
                        {!!props.error && <ErrorText>{props.error}</ErrorText>}
                        <Input
                            className="mb-3 rounded"
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
                            className="mb-3 rounded"
                            placeholder="enter amount"
                            onChange={handleChange}
                        />
                        {!!errors.amount && <Error>{errors.amount}</Error>}
                        <div className="d-flex justify-content-end align-items-center">
                            {values.amount > props.balance && (
                                <ErrorText>insufficient balance</ErrorText>
                            )}
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Button
                                type="submit"
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
                    </form>
                )
            }}
        </Formik>
    )
}

const SignUpForm = (formLoading, handleSubmit, regError) => {
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
        height: '40px',
        width: '95%',
    }
    return (
        <Formik
            validationSchema={signUpSchema}
            initialValues={initialValues}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={handleSubmit}
        >
            {({ errors, handleChange, handleSubmit, values }) => {
                return (
                    <div
                        className="d-flex justify-content-center align-items-center m-auto pb-4"
                        style={{ width: '60%' }}
                    >
                        <form onSubmit={handleSubmit}>
                            {!!regError && <ErrorText>{regError}</ErrorText>}
                            <Label>First name</Label>
                            <Input
                                value={values.firstName}
                                type="text"
                                style={style}
                                name="firstName"
                                onChange={handleChange}
                            />
                            {!!errors.firstName && (
                                <ErrorText>{errors.firstName}</ErrorText>
                            )}
                            <Label>Surname</Label>
                            <Input
                                value={values.surName}
                                type="text"
                                style={style}
                                name="surName"
                                onChange={handleChange}
                            />
                            {!!errors.surName && (
                                <ErrorText>{errors.surName}</ErrorText>
                            )}
                            <Label>Last name</Label>
                            <Input
                                value={values.lastName}
                                type="text"
                                style={style}
                                name="lastName"
                                onChange={handleChange}
                            />
                            {!!errors.lastName && (
                                <ErrorText>{errors.lastName}</ErrorText>
                            )}

                            <Label>Email</Label>
                            <Input
                                onChange={handleChange}
                                value={values.email}
                                type="email"
                                name="email"
                                style={style}
                            />
                            {!!errors.email && (
                                <ErrorText>{errors.email}</ErrorText>
                            )}
                            <Label>Password</Label>
                            <Input
                                value={values.password}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                style={style}
                            />
                            {!!errors.password && (
                                <ErrorText>{errors.password}</ErrorText>
                            )}
                            <Label>Phone number</Label>
                            <Input
                                type="text"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                style={style}
                                name="phoneNumber"
                            />
                            {!!errors.phoneNumber && (
                                <ErrorText>{errors.phoneNumber}</ErrorText>
                            )}
                            <Label>Gender</Label>
                            <select
                                style={{
                                    height: '47px',
                                    width: '95%',
                                    border: '1px solid black',
                                    borderRadius: '12px',
                                    marginTop: '7px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                }}
                                name="gender"
                                value={values.gender}
                                onChange={handleChange}
                            >
                                <option>gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            {!!errors.gender && (
                                <ErrorText>{errors.gender}</ErrorText>
                            )}
                            <div className="d-flex justify-content-center align-items-center">
                                <Button type="submit" className="mt-3">
                                    {formLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="#00BFFF"
                                        />
                                    ) : (
                                        'create account'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                )
            }}
        </Formik>
    )
}
LoginForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
    error: propTypes.string.isRequired,
    formLoading: propTypes.bool.isRequired,
}
TransferForm.propTypes = {
    formSubmit: propTypes.func.isRequired,
    error: propTypes.string.isRequired,
    formLoading: propTypes.bool.isRequired,
    balance: propTypes.any.isRequired,
}
export { LoginForm, TransferForm, SignUpForm }
