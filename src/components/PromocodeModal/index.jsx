import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";
import Input from "../Input";

// Helpers
import getLocale from "../../helpers/getLoacale";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,
    block__input,
    block__button
} = classes;

const PromocodeModal = ({onClose = () => {}}) => {
    const locale = getLocale();

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>
           <form action="" method="POST">
                <Input
                    required={true}
                    name={"promocode"}
                    className={block__input}
                    placeholder={lang.placeholder[locale]}
                />
                <Button
                    type={"submit"}
                    className={block__button}
                >{lang.button[locale]}</Button>
           </form>
        </div>
    );
}

export default PromocodeModal;