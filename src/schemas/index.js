import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 number

export const schema = yup.object().shape({
    email: yup.string().email('Please enter the valid email').required('Required'),
    age: yup.number().positive().integer().required('Required'),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, {message: 'Please create a stronger password'})
      .required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Required'),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required('Required'),
  jobType: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'Please select one of types')
    .required('Required'),
  acceptedToS: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service')
})