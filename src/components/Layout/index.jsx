import classes from "./styles.module.scss";

const {
    layout,
    layout_vertical
} = classes;

export default function Layout (props) {
    const {direction, className, children} = props;

    if (direction === "vertical") {
        return (
            <div className={layout + " " + layout_vertical + (className ? " " + className : "")}>
                {children}
            </div>
        );
    }
    else {
        return (
            <div className={layout + (className ? " " + className : "")}>
                {children}
            </div>
        );
    }
}