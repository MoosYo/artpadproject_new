import CheckIcon from "../Icons/check";
import classes from "./styles.module.scss";

const {
    checkbox,
    checkbox__input,
    checkbox__icon
} = classes;

export default function Checkbox (props) {

    const {
        className,
        checked,
        defaultChecked,
        onChange,
        name
    } = props;

    return (
        <>
            <input
                name={name}
                defaultChecked={defaultChecked}
                checked={checked}
                type="checkbox"
                onChange={onChange}
                className={checkbox__input + (className ? " " + className : "")}
            />
            <div className={checkbox}>
                <CheckIcon className={checkbox__icon} />
            </div>
        </>
    )
}