import classes from "./styles.module.scss";

const {
    teamPage
} = classes;

let initState = window.initState;

if (!initState) {
    initState = {
        data: "text"
    };
}

export default function TeamPage (props) {
    return (
        <div className={teamPage}>
            Team page
        </div>
    )
}