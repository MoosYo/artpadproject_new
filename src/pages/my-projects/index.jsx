import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";

const {
    myProjectsPage
} = classes;

const {
    data
} = window.initState ? window.initState : {
    data: "text"
};

export default function MyProjectsPage (props) {

    return (
        <>
            <Tabs tabs={profileRoutes} />
        </>
    );
}