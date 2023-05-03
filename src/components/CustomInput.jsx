import { useField } from "formik";

const CustomInput = ({label, ...props}) => {
    const [field, meta,] = useField(props);
    
    return (
        <div className="input-container"> 
            <label>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ? 'input-errors' : 'input-wrapper'}
            />
            {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
        </div>
    )
}

export default CustomInput;