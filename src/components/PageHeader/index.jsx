import classes from "./styles.module.scss";

const {
    pageHeader
} = classes;

export default function PageHeader (props) {
    return (
        <h2 className={pageHeader + (props.className ? " " + props.className : "")}>
            {props.children}
        </h2>
    );
}