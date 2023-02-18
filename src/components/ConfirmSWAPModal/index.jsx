import { useState } from "react";

import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";
import Input from "../Input";

// Helpers
import getLocale from "../../helpers/getLoacale";
import ArrowDirectionIcon from "../Icons/arrowDirection";
import WartIcon from "../Icons/wart";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,

    block__form,
    block__formLabel,
    block__formLabel_flexColumn,
    block__wartIcon,
    block__value,
    block__wartText,
    block__arrow,
    block__arrowImg,
    block__formLabelText,
    block__formInput,
    block__info,
    block__infoRow,
    block__infoName,
    block__infoValue,
    block__infoArrow,
    block__confirmButton,
} = classes;

const ConfirmSwapModal = ({onClose = () => {}, onConfirm = () => {}}) => {
    const locale = getLocale();

    const [wart, setWart] = useState(0);
    const [wartAddress, setWartAddress] = useState("");

    const confirm = async (e) => {
        onClose();
        onConfirm(wart, wartAddress);
    };

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>

           <div className={block__form}>
                <div className={block__formLabel}>
                    <WartIcon className={block__wartIcon} />
                    <input
                        className={block__value}
                        type={"number"}
                        min={0}
                        value={wart}
                        onChange={e => setWart(e.target.value)}
                    />
                    <p className={block__wartText}>WART</p>
                </div>

                <div className={block__arrow}>
                    <ArrowDirectionIcon className={block__arrowImg} />
                </div>

                <label className={block__formLabel + " " + block__formLabel_flexColumn}>
                    <p className={block__formLabelText}>
                        {lang.wartAddressLabel[locale]}:
                    </p>
                    <input
                        type="text"
                        className={block__formInput}
                        placeholder={lang.wartAddressPlaceholder[locale]}
                        value={wartAddress}
                        onChange={e => setWartAddress(e.target.value)}
                    />
                </label>

                <div className={block__info}>
                    <div className={block__infoRow}>
                        <p className={block__infoName}>{lang.price[locale]}</p>
                        <p className={block__infoValue}>wARTR 1:1 ARTR</p>
                    </div>
                    <div className={block__infoRow}>
                        <p className={block__infoName}>{lang.fee[locale]}</p>
                        <p className={block__infoValue}>0.0001 BNB</p>
                    </div>
                    <div className={block__infoRow}>
                        <p className={block__infoName}>{lang.route[locale]}</p>
                        <p className={block__infoValue}>wARTR <ArrowDirectionIcon className={block__infoArrow} /> ARTR</p>
                    </div>
                </div>

                <Button className={block__confirmButton} onClick={confirm}>{lang.confirmButton[locale]}</Button>
           </div>
        </div>
    );
}

export default ConfirmSwapModal;