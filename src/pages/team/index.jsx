import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Avatar from "../../components/Avatar";

// Data
import profileRoutes from "../../routes/profile";
import Progressbar from "../../components/Progressbar";

const {
    teamPage
} = classes;

const {
    userName,
    avatar,
    expireIn,
    level,
    invitedBy,
    activeMembers,
    totalMembers,
    coinsCount,
    delegated
} = window.initState ? window.initState : {
    userName: "Maksnavin",
    avatar: "",
    expireIn: 1663837440000,
    level: 10,
    invitedBy: "makeart",
    activeMembers: 6,
    totalMembers: 395,
    coinsCount: 1065127,
    delegated: 790279
};

export default function TeamPage (props) {

    const expireInDate = new Date(expireIn);

    return (
        <>
            <Tabs tabs={profileRoutes} />
            <PageHeader>Team</PageHeader>
            <Layout>
                <Container className="">
                    <Avatar img={avatar} className="" />
                    <div className="">
                        <div className="">
                            <h2 className="">{userName}</h2>
                            <p className="">
                                Активен до {expireInDate.toLocaleDateString("ru-RU")} {expireInDate.getHours()}:{("0"+expireInDate.getMinutes()).slice(-2)}
                            </p>
                        </div>
                        <div className="">
                            <p className="">Lucky</p>
                            <Progressbar value={level} showPercents={true} />
                            <p className="">Leader</p>
                        </div>
                        <p className="">
                            Вас пригласил {invitedBy}
                        </p>
                    </div>
                </Container>
                <Layout direction="vertical">
                    <Container className="">
                        <h2 className="">Members (active)</h2>
                        <p className="">
                            {totalMembers.toLocaleString("ru-RU")}
                            <span className="">/{activeMembers.toLocaleString("ru-RU")}</span>
                        </p>
                    </Container>
                    <Container className="">
                        <h2 className="">Сoins in the team</h2>
                        <p className="">
                            {coinsCount.toLocaleString("ru-RU")}
                        </p>
                    </Container>
                    <Container className="">
                        <h2 className="">Delegated by the team</h2>
                        <p className="">
                            {delegated.toLocaleString("ru-RU")}
                        </p>
                    </Container>
                </Layout>
            </Layout>
            <PageHeader className="">Level 1</PageHeader>
            <p className="">Invited members</p>
            <div className="">
                <a href="#all" className="">All ({totalMembers.toLocaleString("ru-RU")})</a>
                <a href="#activated" className="">Activated ({activeMembers.toLocaleString("ru-RU")})</a>
                <a href="#not-activated" className="">Not activated ({(totalMembers - activeMembers).toLocaleString("ru-RU")})</a>
            </div>
        </>
    );
}