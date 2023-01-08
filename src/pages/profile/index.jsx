import classes from "./styles.module.scss";
import localize from "./local.json";

// Components
import Tabs from "../../components/Tabs";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";
import Avatar from "../../components/Avatar";
import EditIcon from "../../components/Icons/Edit";
import EmailIcon from "../../components/Icons/Email";
import TelegramProfileIcon from "../../components/Icons/TelegramProfile";
import Layout from "../../components/Layout";

// Data
import profileRoutes from "../../routes/profile";
import CopyIcon from "../../components/Icons/Copy";

// Helpers
import getLocale from "../../helpers/getLoacale";

const {
   profilePage__mainBlock,
   profilePage__rightBlock,
   profilePage__rightBlockHeader,
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
   profilePage__userLinkText,
   profilePage__copyBlock,
   profilePage__copyBlockText,
   profilePage__copyBlockIcon,
} = classes;

const { login, avatar, email, telegram, wallet, inviteLink } = window.initState?.user
   ? window.initState?.user
   : {
        login: "Maksnavin",
        avatar: "",
        email: "Electronnaja_Pchta@mail.com",
        telegram: "maksnavin",
        wallet: "ARTR-1111-1111-1111",
        inviteLink: "https://artr.link/maksnavin",
     };

let shortWallet = "";

if (wallet.length > 19) {
   shortWallet = wallet.substring(0, 11) + "..." + wallet.substring(wallet.length - 4);
} else {
   shortWallet = wallet;
}
// shortWallet +=

export default function ProfilePage({}) {

   const local = getLocale();

   const copy = (text) => {
      navigator.clipboard.writeText(text);
   };

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <Layout>
            <Container className={profilePage__mainBlock}>
               <Avatar img={avatar} className={profilePage__userAvatar} />
               <div className={profilePage__userInfoBlock}>
                  <div className={profilePage__userName}>
                     <p className={profilePage__userNameText}>{login}</p>

                     <a href="/profile/edit" className={profilePage__userNameEdit} type="button">
                        <span className={profilePage__userNameEditText}>{localize.edit[local]}</span>
                        <EditIcon className={profilePage__userNameEditIcon} />
                     </a>
                  </div>

                  <a
                     href={"mailto:" + email}
                     className={profilePage__userLink + " " + profilePage__userLink_marginBottom}
                  >
                     <EmailIcon className={profilePage__userLinkIcon} />
                     <span className={profilePage__userLinkText}>{email}</span>
                  </a>
                  <a
                     href={"https://t.me/" + telegram}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={profilePage__userLink}
                  >
                     <TelegramProfileIcon className={profilePage__userLinkIcon} />
                     <span className={profilePage__userLinkText}>t.me {telegram}</span>
                  </a>
               </div>
            </Container>

            <Layout direction="vertical">
               <Container className={profilePage__rightBlock}>
                  <h2 className={profilePage__rightBlockHeader}>{localize.wallet[local]}</h2>
                  <p className={profilePage__copyBlock}>
                     <span className={profilePage__copyBlockText}>{shortWallet}</span>
                     <CopyIcon className={profilePage__copyBlockIcon} onClick={() => copy(wallet)} />
                  </p>
               </Container>
               <Container className={profilePage__rightBlock}>
                  <h2 className={profilePage__rightBlockHeader}>{localize.link[local]}</h2>
                  <p className={profilePage__copyBlock}>
                     <span className={profilePage__copyBlockText}>{inviteLink}</span>
                     <CopyIcon className={profilePage__copyBlockIcon} onClick={() => copy(inviteLink)} />
                  </p>
               </Container>
            </Layout>
         </Layout>
      </>
   );
}
