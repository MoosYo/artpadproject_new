import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";
import Avatar from "../../components/Avatar";
import EditIcon from "../../components/Icons/Edit";
import EmailIcon from "../../components/Icons/Email";
import TelegramProfileIcon from "../../components/Icons/TelegramProfile";

// Data
import profileRoutes from "../../routes/profile";

const {
    profilePage,
    profilePage__layout,
    profilePage__layout_vertical,
    profilePage__mainBlock,
    profilePage__rightBlock,
    profilePage__userAvatar,
    profilePage__userInfoBlock,
    profilePage__userName,
    profilePage__userNameText,
    profilePage__userNameEdit,
    profilePage__userNameEditText,
    profilePage__userNameEditIcon,
    profilePage__userLink,
    profilePage__userLink_marginBottom,
    profilePage__userLinkIcon,
    profilePage__userLinkText
} = classes;

const {
    userName,
    avatar,
    email,
    telegram,
    wallet,
    inviteLink
} = window.initState ? window.initState : {
    userName: "Maksnavin",
    avatar: "",
    email: "Electronnaja_Pchta@mail.com",
    telegram: "maksnavin",
    wallet: "ARTR-1111-1111-1111",
    inviteLink: "https://artr.link/maksnavin"
};

export default function ProfilePage (props) {

    return (
        <>
            <Tabs tabs={profileRoutes} />
            <PageHeader>Profile</PageHeader>
            <div className={profilePage__layout}>
                <Container className={profilePage__mainBlock}>
                    <Avatar img={avatar} className={profilePage__userAvatar} />
                    <div className={profilePage__userInfoBlock}>
                        <div className={profilePage__userName}>
                            <p className={profilePage__userNameText}>{userName}</p>

                            <a href="/profile/edit" className={profilePage__userNameEdit} type="button">
                                <span className={profilePage__userNameEditText}>Edit</span>
                                <EditIcon className={profilePage__userNameEditIcon} />
                            </a>
                        </div>

                        <a href={"mailto:"+email} className={profilePage__userLink + " " + profilePage__userLink_marginBottom}>
                            <EmailIcon className={profilePage__userLinkIcon} /><span className={profilePage__userLinkText}>{email}</span>
                        </a>
                        <a
                            href={"https://t.me/"+telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={profilePage__userLink}
                        >
                            <TelegramProfileIcon className={profilePage__userLinkIcon} /><span className={profilePage__userLinkText}>t.me {telegram}</span>
                        </a>
                    </div>
                </Container>

                <div className={profilePage__layout_vertical}>
                    <Container className={profilePage__rightBlock}>
                        Block 2
                    </Container>
                    <Container className={profilePage__rightBlock}>
                        Block 3
                    </Container>
                </div>
            </div>
        </>
    );
}