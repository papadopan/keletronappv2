import * as Yup from 'yup';

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const ForgotWithCodeSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  code: Yup.number().required('Code is required'),
  password: Yup.string()
    .min(6, 'Password too short')
    .max(15, 'Password too Long!')
    .required('Password is required'),
});
