import classes from "./styles.module.scss";

import Container from "../Container";
import { useEffect, useState } from "react";

const {
    modal,
    modal_shown,
    modal__wrapper,
    modal__wrapper_shown,
    modal__background,
} = classes

export default function Modal (props) {

    const {
        shown,
        children,
        onClose,
        className
    } = props;

    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        if (shown) {
            setModalState(shown);
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            document.querySelector("body").style.overflow = null;

            const timer = setTimeout(()=>{
                setModalState(shown);
                clearTimeout(timer);
            }, 500);
        }
    }, [shown]);

    return (
        shown || modalState ? (
            <div className={modal__wrapper + (shown && modalState ? " " + modal__wrapper_shown : "")}>
                <div
                    className={modal__background}
                    onClick={onClose}
                />
                <Container className={modal + (shown && modalState ? " " + modal_shown : "")}>
                    {children}
                </Container>
            </div>
        ) : ""
    )
}