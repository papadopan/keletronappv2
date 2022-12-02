import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('First name is required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password too short')
    .max(15, 'Password too Long!')
    .required('Password is required'),
});
