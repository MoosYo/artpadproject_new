import classes from "./styles.module.scss";

import emptyAvatarImg from "../../assets/svg/avatar.svg";

const {
    avatar
} = classes;

export default function Avatar (props) {
    const img = props.img ? props.img : emptyAvatarImg;
    return (
        <img
            src={img}
            className={avatar + (props.className ? " " + props.className : "")}
            alt={props.alt ? props.alt : "User avatar"}
        />
    );
}