import classes from "./styles.module.scss";

const {
    input
} = classes

export default function Input ({
    value,
    onChange,
    name,
    type,
    placeholder,
    required,
    className
}) {
    return (
        <input
            className={input + (className ? " " + className : "")}
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={onChange}    
        />
    );
}