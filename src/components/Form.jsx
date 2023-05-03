import React from 'react';
import { useFormik } from 'formik';
import { schema } from '../schemas';
import '../scss/style.scss';

const onSubmit = (values, actions) => {
  actions.resetForm();
}

const Form = () => {
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit
  });

  return (
    <>
      <form className='form-box' onSubmit={handleSubmit} >
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}    
            className={errors.email && touched.email ? 'input-errors' : 'input-wrapper'}    
          />
          {errors.email && touched.email && <p className='error'>{errors.email}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? 'input-errors' : 'input-wrapper'}       
          />
          {errors.age && touched.age && <p className='error'>{errors.age}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'input-errors' : 'input-wrapper'}       
          />
          {errors.password && touched.password && <p className='error'>{errors.password}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="current-password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword && touched.confirmPassword ? 'input-errors' : 'input-wrapper'}     
          />
          {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
  
        <button className='btn' disabled={isSubmitting} type="submit">Submit</button>
     </form>
    </>
  )
}

export default Form;