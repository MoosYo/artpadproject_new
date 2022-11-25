import classes from "./styles.module.scss";

const {
    container
} = classes;

export default function Container (props) {
    return (
        <div className={container + (props.className ? " " + props.className : "")}>
            {props.children}
        </div>
    );
}