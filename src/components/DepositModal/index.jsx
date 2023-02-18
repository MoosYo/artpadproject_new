import { useState } from "react";

import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";

// Helpers
import getLocale from "../../helpers/getLoacale";
import CopyIcon from "../Icons/Copy";
import InfoIcon from "../Icons/info";
import WartIcon from "../Icons/wart";
import ArrowDirectionIcon from "../Icons/arrowDirection";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,

    block__deposit,
    block__qr,
    block__qrHeader,
    block__qrImg,
    block__qrSupport,
    block__acceptButton,

    copyValue,
    copyValue__header,
    copyValue__name,
    copyValue__button,
    copyValue__buttonIcon,
    copyValue__buttonText,
    copyValue__value,
    copyValue__info,
    copyValue__infoIcon,
    copyValue__infoText,

    valueBlock,
    valueBlock__title,
    valueBlock__row,
    valueBlock__icon,
    valueBlock__value,
    valueBlock__unit,

    arrow,

    infoBlock,
    infoBlock__row,
    infoBlock__name,
    infoBlock__vale,
} = classes;

const DepositModal = ({onClose = () => {}, wart = 0, address = ""}) => {
    const locale = getLocale();

    const [qrData, setQrData] = useState("QR CODE DATA");

    const [depositAddress, setDepositAddress] = useState("art19eg2ue2am2appmw5pmsg596mkad549sdvmk59vmk43");

    const [memo, setMemo] = useState(1408341257112);

    const [receivable, setReceivable] = useState(wart);
    const [transfer, setTransfer] = useState(wart);

    const [minDeposit, setMinDeposit] = useState(0.0001);

    const [minTime, setMinTime] = useState(10);
    const [maxTime, setMaxTime] = useState(30);

    const confirm = async (e) => {


        onClose();
    };

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>

           <div className={block__deposit}>

                <div className={block__qr}>
                    <p className={block__qrHeader}>{lang.qrHeader[locale]}</p>

                    <img
                        src={"https://chart.googleapis.com/chart?cht=qr&chs=512x512&chl=" + qrData}
                        alt={lang.qrHeader[locale]}
                        className={block__qrImg}
                    />

                    <p className={block__qrSupport}>{lang.qrSupport[locale]}</p>
                </div>

                <div className={copyValue}>
                    <div className={copyValue__header}>
                        <p className={copyValue__name}>
                            {lang.addressValue[locale]}:
                        </p>

                        <button
                            type="button"
                            className={copyValue__button}
                            onClick={e => navigator.clipboard.writeText(depositAddress)}
                        >
                            <CopyIcon className={copyValue__buttonIcon} />
                            <span className={copyValue__buttonText}>
                                {lang.copy[locale]}
                            </span>
                        </button>
                    </div>

                    <p className={copyValue__value}>
                        {depositAddress}
                    </p>
                </div>

                <div className={copyValue}>
                    <div className={copyValue__header}>
                        <p className={copyValue__name}>
                            {lang.memo[locale]}:
                        </p>

                        <button
                            type="button"
                            className={copyValue__button}
                            onClick={e => navigator.clipboard.writeText(memo)}
                        >
                            <CopyIcon className={copyValue__buttonIcon} />
                            <span className={copyValue__buttonText}>
                                {lang.copy[locale]}
                            </span>
                        </button>
                    </div>

                    <p className={copyValue__value}>
                        {memo}
                    </p>

                    <div className={copyValue__info}>
                        <InfoIcon className={copyValue__infoIcon} />
                        <p className={copyValue__infoText}>
                            {lang.info[locale]}
                        </p>
                    </div>
                </div>

                <div className={valueBlock}>
                    <h2 className={valueBlock__title}>{lang.receivable[locale]}</h2>

                    <div className={valueBlock__row}>
                        <WartIcon className={valueBlock__icon} />
                        <p className={valueBlock__value}>{parseFloat(receivable).toLocaleString(locale, {minimumFractionDigits: 2})}</p>
                        <p className={valueBlock__unit}>WARTR</p>
                    </div>
                </div>

                <ArrowDirectionIcon className={arrow} />

                <div className={valueBlock}>
                    <h2 className={valueBlock__title}>{lang.transferAmount[locale]}</h2>

                    <div className={valueBlock__row}>
                        <WartIcon className={valueBlock__icon} />
                        <p className={valueBlock__value}>{parseFloat(transfer).toLocaleString(locale, {minimumFractionDigits: 2})}</p>
                        <p className={valueBlock__unit}>WARTR</p>
                    </div>
                </div>

                <div className={infoBlock}>
                    <div className={infoBlock__row}>
                        <p className={infoBlock__name}>
                            {lang.minimum[locale]}:
                        </p>
                        <p className={infoBlock__vale}>
                            {minDeposit.toLocaleString(locale, {minimumFractionDigits: 4})} ARTR
                        </p>
                    </div>
                    <div className={infoBlock__row}>
                        <p className={infoBlock__name}>
                            {lang.estimated[locale]}:
                        </p>
                        <p className={infoBlock__vale}>
                            {minTime} - {maxTime} {lang.minutes[locale]}
                        </p>
                    </div>
                </div>
            
                <Button className={block__acceptButton} onClick={confirm}>{lang.confirmButton[locale]}</Button>
           </div>
        </div>
    );
}

export default DepositModal;