import classes from "./styles.module.scss";

const {
    input,
    input_outline
} = classes

export default function Input ({
    value,
    onChange,
    name,
    type,
    placeholder,
    required,
    className,
    variant
}) {

    let tmpClassName = input + (className ? " " + className : "");

    if (variant === "outline") tmpClassName += " " + input_outline

    return (
        type === "textarea" ? (
            <textarea
                className={tmpClassName}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}    
            />
        ) : (
            <input
                className={tmpClassName}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}    
            />
        )
    );
}