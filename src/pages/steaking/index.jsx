import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";

const {
    steakingPage
} = classes;

const {
    data
} = window.initState ? window.initState : {
    data: "text"
};

export default function SteakingPage (props) {

    return (
        <>
            <Tabs tabs={profileRoutes} />
        </>
    );
}