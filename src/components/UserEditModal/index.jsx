import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";

// Helpers
import getLocale from "../../helpers/getLoacale";
import { useState } from "react";
import Avatar from "../Avatar";
import { useRef } from "react";
import Input from "../Input";
import CopyOutlineIcon from "../Icons/CopyOutline";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,
    block__button,

    edit,
    edit__right,
    edit__avatar,
    edit__rightButton,
    edit__left,

    edit__block,
    edit__blockTitle,
    edit__blockValue,
    edit__blockValueText,
    edit__copyIcon,
    edit__blockInput,
    edit__blockSave,
    edit__blockSave_bgNone,
    
} = classes;

const { login, avatar, email, telegram, wallet, inviteLink } = window.initState?.user
   ? window.initState?.user
   : {
        login: "Maksnavin",
        avatar: "",
        email: "Electronnaja_Pchta@mail.com",
        telegram: "maksnavin",
        wallet: "0x32e783121b41106BCED1f742D3722e814265ba46",
        inviteLink: "https://artr.link/maksnavin",
     };

const UserEditModal = ({onClose = () => {}}) => {
    const locale = getLocale();
    const avatarInputRef = useRef();

    const [img, setImg] = useState(avatar ? avatar : null);

    const openFileDialog = () => {
        console.log(avatarInputRef);
        avatarInputRef.current.click();
    }

    const changeImg = (e) => {
        const file = e.target.files[0];

        const reader  = new FileReader();
        reader.onloadend = function () {
            setImg(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImg(null);
        }

        // Add here request to img update
    }

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>
           <form action="" method="POST" className={edit}>
                <div className={edit__right}>
                    <input
                        type="file"
                        ref={avatarInputRef}
                        name="avatar"
                        style={{display: "none"}}
                        onChange={changeImg}
                    />
                    <Avatar
                        img={img}
                        className={edit__avatar}
                    />
                    <Button
                        variant="outline"
                        onClick={openFileDialog}
                        className={edit__rightButton}
                    >
                        {lang.changeImage[locale]}
                    </Button>
                    <Button className={edit__rightButton}>
                        {lang.addNft[locale]}
                    </Button>
                </div>

                <div className={edit__left}>
                    <div className={edit__block}>
                        <h2 className={edit__blockTitle}>
                            {lang.nickname[locale]}
                        </h2>
                        <div className={edit__blockValue}>
                            <p className={edit__blockValueText}>{login}</p>
                        </div>
                        <Input className={edit__blockInput} placeholder={lang.newNickname[locale]} />
                        <Button className={edit__blockSave + " " + edit__blockSave_bgNone} variant="outline">{lang.change[locale]}</Button>
                    </div>

                    <div className={edit__block}>
                        <h2 className={edit__blockTitle}>
                            {lang.email[locale]}
                        </h2>
                        <div className={edit__blockValue}>
                            <p className={edit__blockValueText}>{email}</p>
                        </div>
                        <Input className={edit__blockInput} placeholder={lang.newEmail[locale]} />
                        <Button className={edit__blockSave + " " + edit__blockSave_bgNone} variant="outline">{lang.change[locale]}</Button>
                    </div>

                    <div className={edit__block}>
                        <h2 className={edit__blockTitle}>
                            {lang.wallet[locale]}
                        </h2>
                        <div className={edit__blockValue}>
                            <p className={edit__blockValueText}>
                                {wallet.substring(0,18)}...
                                {wallet.substring(wallet.length - 4)}
                            </p>
                            <CopyOutlineIcon
                                className={edit__copyIcon}
                                onClick={() => navigator.clipboard.writeText(wallet)}
                            />
                        </div>
                        <Button className={edit__blockSave + " " + edit__blockSave_bgNone} variant="outline">{lang.changeWallet[locale]}</Button>
                        <Button className={edit__blockSave} >{lang.disconnectWallet[locale]}</Button>
                    </div>

                    <div className={edit__block}>
                        <h2 className={edit__blockTitle}>
                            {lang.changePass[locale]}
                        </h2>
                        <Input className={edit__blockInput} placeholder={lang.newPass[locale]} />
                        <Input className={edit__blockInput} placeholder={lang.confirmPass[locale]} />
                        <Button className={edit__blockSave + " " + edit__blockSave_bgNone} variant="outline">{lang.change[locale]}</Button>
                    </div>
                </div>
           </form>
        </div>
    );
}

export default UserEditModal;