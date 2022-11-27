import { useState } from "react";
import classes from "./styles.module.scss";

const {
    countdown,
    countdown__block,
    countdown__blockValue,
    countdown__blockTip
} = classes;

export default function Countdown ({timestamp, className}) {

    const [currentTimeStamp, setCurrentTimeStamp] = useState(new Date().getTime());

    setInterval(()=>{
        setCurrentTimeStamp(new Date().getTime());
    }, 900);

    let diff = timestamp - currentTimeStamp;

    diff = diff / 1000 / 60 / 60 / 24;
    const days = Math.floor(diff);

    diff = (diff - days) * 24;
    const hours = Math.floor(diff);

    diff = (diff - hours) * 60;
    const minutes = Math.floor(diff);

    diff = (diff - minutes) * 60;
    const seconds = Math.floor(diff);

    return (
        <div className={countdown + (className ? " " + className : "")}>
            <div className={countdown__block}>
                <p className={countdown__blockValue}>
                    {("0"+days).slice(-2)}
                </p>
                <p className={countdown__blockTip}>
                    days
                </p>
            </div>
            <div className={countdown__block}>
                <p className={countdown__blockValue}>
                    {("0"+hours).slice(-2)}
                </p>
                <p className={countdown__blockTip}>
                    hours
                </p>
            </div>
            <div className={countdown__block}>
                <p className={countdown__blockValue}>
                    {("0"+minutes).slice(-2)}
                </p>
                <p className={countdown__blockTip}>
                    minutes
                </p>
            </div>
            <div className={countdown__block}>
                <p className={countdown__blockValue}>
                    {("0"+seconds).slice(-2)}
                </p>
                <p className={countdown__blockTip}>
                    seconds
                </p>
            </div>
        </div>
    )
}