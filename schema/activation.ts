import * as Yup from 'yup';

export const GetCodeSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required')
});
export const ActivationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  code: Yup.number().required('Code is required')
});
