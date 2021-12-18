import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().email().required('email is required'),
    password: yup.string().required('password is required'),
})

const transferSchema = yup.object().shape({
    recipient: yup.number().required('recipient account number is required'),
    amount: yup.number().required(),
})

const signUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    surName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup
        .string()
        .required('*password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            'min length 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character'
        ),
    gender: yup.string().required('*gender is required'),
    phoneNumber: yup.string().required(),
})

export { loginSchema, transferSchema, signUpSchema }
