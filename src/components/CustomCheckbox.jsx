import { useField } from "formik";

const CustomCheckbox = ({ ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
        <div className="checkbox-wrapper">
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ? 'input-errors' : 'checkbox'}
            />
            <span className="checkbox-text">I accept the terms of service</span>
        </div>
            {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
        </>
    )
}

export default CustomCheckbox;