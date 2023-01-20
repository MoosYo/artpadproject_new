import classes from "./styles.module.scss";

const {
    tooltip,
    tooltip__block,
    tooltip__block_right
} = classes;

const ToolTip = ({children = "", x = 0, y = 0, onClose = () => ""}) => {

    const isRight = x > window.innerWidth / 2;


    const close = () => {
        onClose();
    }

    return (
        <div
            className={tooltip}
            style={{top: y - 28 + "px", left: isRight ? null : x + "px", right: isRight ? (window.innerWidth - x - 16) + "px" : null }}
            onMouseLeave={close}
        >
            <div
                className={
                    tooltip__block +
                    (isRight ? " " + tooltip__block_right : "")
                }
                onClick={close}
            >
                {children}
            </div>
        </div>
    );
}

export default ToolTip;