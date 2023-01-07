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
import Chip from "../../components/Chip";
import { useState } from "react";

const {
   teamPage__memberContainer,
   teamPage__memberAvatar,
   teamPage__memberInfoBlock,
   teamPage__memberNameBlock,
   teamPage__memberName,
   teamPage__memberExpireIn,
   teamPage__memberLevel,
   teamPage__memberLevelName,
   teamPage__memberLevelProgress,
   teamPage__memberInvitedBy,

   teamPage__numbersDataBlock,
   teamPage__numbersDataTitle,
   teamPage__numbersDataValue,
   teamPage__numbersDataValue_small,

   teamPage__listHeader,
   teamPage__listPreText,
   teamPage__listNav,
   teamPage__listNavLinks,
   teamPage__listNavLinks_active,
   teamPage__listNavLinksText,
} = classes;

const { userName, avatar, expireIn, level, invitedBy, activeMembers, totalMembers, coinsCount, delegated } = window
   .initState?.team
   ? window.initState?.team
   : {
        userName: "Maksnavin",
        avatar: "",
        expireIn: 1663837440000,
        level: 10,
        invitedBy: "makeart",
        activeMembers: 6,
        totalMembers: 395,
        coinsCount: 1065127,
        delegated: 790279,
     };

export default function TeamPage(props) {
   const local = "ru-RU";

   const expireInDate = new Date(expireIn);

   const hash = window.location.hash;

   const [activeList, setActiveList] = useState(() => {
      if (hash === "#activated") return "activated";
      if (hash === "#not-activated") return "not-activated";
      return "all";
   });

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>Team</PageHeader>
         <Layout>
            <Container className={teamPage__memberContainer}>
               <Avatar img={avatar} className={teamPage__memberAvatar} />
               <div className={teamPage__memberInfoBlock}>
                  <div className={teamPage__memberNameBlock}>
                     <h2 className={teamPage__memberName}>{userName}</h2>
                     <Chip className={teamPage__memberExpireIn}>
                        Активен до {expireInDate.toLocaleDateString("ru-RU")} {expireInDate.getHours()}:
                        {("0" + expireInDate.getMinutes()).slice(-2)}
                     </Chip>
                  </div>
                  <div className={teamPage__memberLevel}>
                     <p className={teamPage__memberLevelName}>Bonus</p>
                     <Progressbar value={level} showPercents={true} className={teamPage__memberLevelProgress} />
                     <p className={teamPage__memberLevelName}>Coins</p>
                  </div>
                  {invitedBy !== null && invitedBy.length > 0 ? (
                     <p className={teamPage__memberInvitedBy}>Вас пригласил {invitedBy}</p>
                  ) : (
                     ""
                  )}
               </div>
            </Container>
            <Layout direction="vertical">
               <Container className={teamPage__numbersDataBlock}>
                  <h2 className={teamPage__numbersDataTitle}>Members (active)</h2>
                  <p className={teamPage__numbersDataValue}>
                     {totalMembers.toLocaleString("ru-RU")}
                     <span className={teamPage__numbersDataValue_small}>
                        {" "}
                        / {activeMembers.toLocaleString("ru-RU")}
                     </span>
                  </p>
               </Container>
               <Container className={teamPage__numbersDataBlock}>
                  <h2 className={teamPage__numbersDataTitle}>Сoins in the team</h2>
                  <p className={teamPage__numbersDataValue}>{coinsCount.toLocaleString("ru-RU")}</p>
               </Container>
               <Container className={teamPage__numbersDataBlock}>
                  <h2 className={teamPage__numbersDataTitle}>Delegated by the team</h2>
                  <p className={teamPage__numbersDataValue}>{delegated.toLocaleString("ru-RU")}</p>
               </Container>
            </Layout>
         </Layout>

         <PageHeader className={teamPage__listHeader}>Level 1</PageHeader>
         <p className={teamPage__listPreText}>Invited members</p>
         <div className={teamPage__listNav}>
            <a
               href="#all"
               onClick={() => setActiveList("all")}
               className={teamPage__listNavLinks + (activeList === "all" ? " " + teamPage__listNavLinks_active : "")}
            >
               <span className={teamPage__listNavLinksText}>All</span>&nbsp;({totalMembers.toLocaleString("ru-RU")})
            </a>
            <a
               href="#activated"
               onClick={() => setActiveList("activated")}
               className={
                  teamPage__listNavLinks + (activeList === "activated" ? " " + teamPage__listNavLinks_active : "")
               }
            >
               <span className={teamPage__listNavLinksText}>Activated</span>&nbsp;(
               {activeMembers.toLocaleString("ru-RU")})
            </a>
            <a
               href="#not-activated"
               onClick={() => setActiveList("not-activated")}
               className={
                  teamPage__listNavLinks + (activeList === "not-activated" ? " " + teamPage__listNavLinks_active : "")
               }
            >
               <span className={teamPage__listNavLinksText}>Not activated</span>&nbsp;(
               {(totalMembers - activeMembers).toLocaleString("ru-RU")})
            </a>
         </div>
      </>
   );
}
