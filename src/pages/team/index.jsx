import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";

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
        <>
            <Tabs tabs={profileRoutes} />
        </>
    );
}