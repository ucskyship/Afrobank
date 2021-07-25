import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
})

const transferSchema = yup.object().shape({
    recipient: yup
        .string()
        .trim()
        .required('recipient account number is required'),
    pin: yup
        .string()
        .trim()
        .required('pin is required to complete transaction'),
    amount: yup.string().trim().required(),
})

export { loginSchema, transferSchema }
