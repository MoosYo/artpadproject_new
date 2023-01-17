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
    block__text,
    block__button
} = classes;

const DevModal = ({onClose = () => {}}) => {
    const locale = getLocale();

    return (
        <div className={block}>
            <div className={block__header}>
                <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
    
                <button className={block__closeBtn} onClick={onClose}>
                    <CloseIcon className={block__closeBtnIcon} />
                </button>
            </div>
            <p className={block__text}>
                {lang.text[locale]}
            </p>
            <Button
                type={"button"}
                onClick={onClose}
                className={block__button}
            >{lang.button[locale]}</Button>
        </div>
    );
}

export default DevModal;