import Button from "../Button";
import CloseIcon from "../Icons/Close";
import Input from "../Input";
import classes from "./styles.module.scss";

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

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>Enter you’r promo code</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>
           <form action="" method="POST">
                <Input
                    required={true}
                    name={"promocode"}
                    className={block__input}
                    placeholder={"Promo code"}
                />
                <Button
                    type={"submit"}
                    className={block__button}
                >Enter</Button>
           </form>
        </div>
    );
}

export default PromocodeModal;