import { useField } from "formik";

const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="input-container">
            <label>{label}</label>
            <select {...field} {...props} className={meta.touched && meta.error ? 'input-errors ' : ''}/>
            {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
        </div>
    )
}

export default CustomSelect;