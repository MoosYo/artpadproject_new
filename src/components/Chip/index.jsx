import classes from "./styles.module.scss";

const {
    chip
} = classes;

export default function Chip (props) {
    return (
        <div className={chip + (props.className ? " " + props.className : "")}>
            {props.children}
        </div>
    )
}