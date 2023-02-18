import { useState } from "react";

import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";

// Helpers
import getLocale from "../../helpers/getLoacale";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,

    block__message,
    block__messageText,
    block__acceptButton,
} = classes;

const AcceptSwapModal = ({onClose = () => {}, onAccept = () => {}}) => {
    const locale = getLocale();

    const confirm = async (e) => {
        onClose();
        onAccept();
    };

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>

           <div className={block__message}>
                <p className={block__messageText}>
                    {lang.text1[locale]}
                </p>
                <p className={block__messageText}>
                    {lang.text2[locale]}
                </p>
                <Button className={block__acceptButton} onClick={confirm}>{lang.confirmButton[locale]}</Button>
           </div>
        </div>
    );
}

export default AcceptSwapModal;