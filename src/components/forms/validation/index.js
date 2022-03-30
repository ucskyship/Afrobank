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
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required().email('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.?*])(?=.{8,})/,
      'min length 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character'
    ),
  gender: yup.string().required('Gender is required'),
  phoneNumber: yup.string().required('Phone number is required'),
})

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
})

export { loginSchema, transferSchema, signUpSchema, forgotPasswordSchema }
