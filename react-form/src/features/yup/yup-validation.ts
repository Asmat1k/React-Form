import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Z]/, 'First letter should be capital')
    .required('Username is required'),
  age: yup
    .number()
    .typeError('Age is required')
    .positive()
    .integer()
    .required('Age is required'),
  email: yup
    .string()
    .email('E-mail format is not valid!')
    .required('E-mail is required'),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.{1,})/, 'Should be 1 lowercase letter')
    .matches(/^(?=.*[A-Z])(?=.{1,})/, 'Should be 1 capital letter')
    .matches(
      /^(?=.*[!@#\\$%\\^&\\*])(?=.{1,})/,
      'Should be 1 special character'
    )
    .matches(/^(?=.*[0-9])(?=.{1,})/, 'Should be 1 number')
    .required('Password is required'),
  cPassword: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.{1,})/, 'Should be 1 lowercase letter')
    .matches(/^(?=.*[A-Z])(?=.{1,})/, 'Should be 1 capital letter')
    .matches(
      /^(?=.*[!@#\\$%\\^&\\*])(?=.{1,})/,
      'Should be 1 special character'
    )
    .matches(/^(?=.*[0-9])(?=.{1,})/, 'Should be 1 number')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm your password!'),
  gender: yup.string().required('Pick a gender!'),
  checkbox: yup
    .boolean()
    .oneOf([true], 'Accept the terms and conditions')
    .required('This is required'),
  file: yup
    .mixed<FileList>()
    .test(
      'fileSize',
      'Less then 2MB are allowed.',
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) => file.size <= 2_000_000)
    )
    .required('File is required'),
  country: yup.string().required('Country is required'),
});
