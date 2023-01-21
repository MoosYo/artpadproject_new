import classes from "./styles.module.scss";

import emptyAvatarImg from "../../assets/svg/avatar.svg";

const {
    avatar
} = classes;

export default function Avatar ({img, alt, className}) {
    return (
        <img
            src={img ? img : emptyAvatarImg}
            className={avatar + (className ? " " + className : "")}
            alt={alt ? alt : "User avatar"}
        />
    );
}