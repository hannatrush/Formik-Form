import { Formik, Form } from 'formik'
import React from 'react'
import CustomInput from './CustomInput'
import { advancedSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'

const onSubmit = (values, actions) => {
  actions.resetForm();
}

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username:'',
        jobType: '',
        acceptedToS: false,
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(isSubmitting) => (
        <Form className='form-box'>
          <CustomInput
            className="input-container"
            label='username'
            name='username'
            type='text'
          />
          <CustomSelect
            className="input-container"
            label='Job type'
            name='jobType'
          >
            <option value=''>Please select a job type</option>
            <option value='designer'>Designer</option>
            <option value='developer'>Developer</option>
            <option value='manager'>Manager</option>
            <option value='other'>Other</option>
          </CustomSelect>
          <CustomCheckbox type='checkbox' name='acceptedToS'/>
          <button className='btn' disabled={isSubmitting} type="submit">Submit</button>
        </Form>
      )

      }
    </Formik>
  )
}

export default FormikForm;