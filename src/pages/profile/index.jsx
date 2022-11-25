import classes from "./styles.module.scss";

const {
    profilePage
} = classes;

let initState = window.initState;

if (!initState) {
    initState = {
        data: "text"
    };
}

export default function ProfilePage (props) {
    return (
        <div className={profilePage}>
            Profile page
        </div>
    )
}