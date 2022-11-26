import classes from "./styles.module.scss";

const {
    progressbar
} = classes;

export default function Progressbar (props) {
    const {
        value,
        showPercents,
        className
    } = props

    return (
        <div className={progressbar + (className ? " " + className : "")}>
            {
                showPercents ? (
                    <p className="">{value}%</p>
                ) : ""
            }
            <div className="">
                <div className="" style={{width: value + "%"}} />
            </div>
        </div>
    )
}