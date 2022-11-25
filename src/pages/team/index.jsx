import classes from "./styles.module.scss";

const {
    teamPage
} = classes;

const {
    data
} = window.initState ? window.initState : {
    data: "text"
};

export default function TeamPage (props) {
    return (
        <div className={teamPage}>
            Team page
        </div>
    )
}