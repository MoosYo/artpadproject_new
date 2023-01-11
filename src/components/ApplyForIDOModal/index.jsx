import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";
import Input from "../Input";

// Helpers
import getLocale from "../../helpers/getLoacale";
import { useState } from "react";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,
    block__input,
    block__button,
    block__result
} = classes;

const ApplyForIDOModal = ({onClose = () => {}}) => {
    const locale = getLocale();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const [result, setResult] = useState(null);

    const sendApply = async (e) => {
        e.preventDefault();

        const body = new FormData();

        body.append("nameapply", name);
        body.append("phoneapply", phone);
        body.append("emailapply", email);
        body.append("descripapply", description);

        const resp = await( await fetch("/public/sendform.php?form=2", {
            method: "POST",
            body
        })).text();

        setResult(resp);
    };

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>
           <form action="" method="POST">
                {
                    !result ? (
                        <>
                            <Input
                                required={true}
                                name={"promocode"}
                                className={block__input}
                                placeholder={lang.placeholder1[locale]}
            
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                required={true}
                                name={"promocode"}
                                className={block__input}
                                placeholder={lang.placeholder2[locale]}
            
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Input
                                required={true}
                                name={"promocode"}
                                className={block__input}
                                placeholder={lang.placeholder3[locale]}
            
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                required={true}
                                type="textarea"
                                name={"promocode"}
                                className={block__input}
                                placeholder={lang.placeholder4[locale]}
            
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Button
                                type={"submit"}
                                className={block__button}
                                onClick={sendApply}
                            >{lang.button[locale]}</Button>
                        </>
                    ) : (
                        <p className={block__result}>{result}</p>
                    )
                }
           </form>
        </div>
    );
}

export default ApplyForIDOModal;