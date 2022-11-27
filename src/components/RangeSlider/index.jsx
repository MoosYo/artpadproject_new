import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.scss";

const {
    rangeSlider,
    rangeSlider__bar,
    rangeSlider__barWrapper,
    rangeSlider__barSections,
    rangeSlider__barItem,
    rangeSlider__barItemLine,
    rangeSlider__barItemLine_selected,
    rangeSlider__barItemLine_left,
    rangeSlider__barItemLine_right,
    rangeSlider__barItemText,
    rangeSlider__barItemText_selected,
    rangeSlider__indicator,
} = classes;

let rendered = false;

export default function RangeSlider ({values, selected, onChange}) {

    const bar = useRef();
    const barProgress = useRef();
    const indicator = useRef();

    const [current, setCurrent] = useState(selected);

    const [cnt, forceUpdate] = useState(0);

    const [moveX, setMoveX] = useState(null);
    const [diffX, setDiffX] = useState(null);

    const getWidth = () => {
        if (bar.current) {
            return bar.current.getClientRects()[0].width;
        }
        else {
            if (window.innerWidth >= 1600) {
                return 1440;
            }
            else if (window.innerWidth >= 920) {
                return 1440 / 1600 * window.innerWidth
            }
            else {
                return 336 / 360 * window.innerWidth
            }
        }
    }

    document.querySelector("body").onresize = () => {
        forceUpdate(cnt+1);
    }

    if (!rendered) {
        const timer = setTimeout(() => {
            forceUpdate(cnt+1);
            clearTimeout(timer);
            rendered = true;
        }, 1);
    }
    
    const halfWidth = 1 / (values.length - 1) * getWidth();
    let posX = 1 / (values.length - 1) * (getWidth()) * current;

    if (indicator.current) {
        if (current < values.length - 1 && current > 0) {
            posX -= indicator.current.getClientRects()[0].width / 2;
        }
        else if (current > 0) {
            posX -= indicator.current.getClientRects()[0].width - 2;
        }
    }

    const currentMoving = Math.ceil((posX + diffX) / halfWidth - 0.5);

    const moveStart = (e) => {
        e.preventDefault();
        setMoveX(e.touches ? e.touches[0].pageX : e.pageX);

        if (barProgress.current) {
            barProgress.current.style.transition = "none";
        }

        if (indicator.current) {
            indicator.current.style.transition = "none";
            indicator.current.style.cursor = "grabbing";
        }
    }

    const move = (e) => {
        if (moveX) {
            e.preventDefault();
            setDiffX((e.touches ? e.touches[0].pageX : e.pageX) - moveX);
        }
    }

    const moveEnd = (e) => {
        e.preventDefault();
        setMoveX(null);
        setDiffX(null);
        setCurrent(Math.abs(currentMoving));

        if (onChange) {
            onChange(Math.abs(currentMoving));
        }

        if (barProgress.current) {
            barProgress.current.style.transition = null;
        }

        if (indicator.current) {
            indicator.current.style.transition = null;
            indicator.current.style.cursor = null;
        }
    }

    return (
        <div
            className={rangeSlider}

            onMouseMove={move}
            onMouseLeave={moveEnd}
            onMouseUp={moveEnd}

            onTouchMove={move}
            onTouchEnd={moveEnd}
        >
            <div className={rangeSlider__barWrapper} ref={bar}>
                <div
                    className={rangeSlider__bar}
                    ref={barProgress}
                    style={{
                        maxWidth: "calc(" + (100 / (values.length - 1) * (current)) + "% + " + (diffX ? diffX : 0) + "px)"
                    }}
                />
            </div>
            <div className={rangeSlider__barSections}>
            {
                values.map((value, i) => (
                    <div className={rangeSlider__barItem} key={i}>
                        <div
                            className={
                                rangeSlider__barItemLine +
                                (i === current && !diffX ? " " + rangeSlider__barItemLine_selected : "") +
                                (i === 0 ? " " + rangeSlider__barItemLine_left : "") +
                                (i === values.length - 1 ? " " + rangeSlider__barItemLine_right : "")
                            }
                        />
                        <span className={
                            rangeSlider__barItemText +
                            ((i === current && !diffX) || (diffX && currentMoving) === i ? " " + rangeSlider__barItemText_selected : "")
                        }>{value}</span>
                    </div>
                ))
            }
            </div>
            <div
                ref={indicator}

                onMouseDown={moveStart}
                onTouchStart={moveStart}

                className={rangeSlider__indicator}
                style={{
                    transform: "translateX("+
                    (posX + (diffX ? diffX : 0))+
                    "px)"
                }}
            />
        </div>
    );
}