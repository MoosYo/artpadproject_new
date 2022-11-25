import classes from "./styles.module.scss";

const {
    profilePage
} = classes;

const {
    data
} = window.initState ? window.initState : {
    data: "text"
};

export default function ProfilePage (props) {
    return (
        <div className={profilePage}>
            Profile page
        </div>
    )
}