import classes from "./styles.module.scss";
import lang from "./local.json";

import EmptyAvatar from "../../assets/svg/avatar.svg";

// Components
import Tabs from "../../components/Tabs";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Avatar from "../../components/Avatar";
import PromocodeModal from "../../components/PromocodeModal";

// Data
import profileRoutes from "../../routes/profile";
import Progressbar from "../../components/Progressbar";
import Chip from "../../components/Chip";
import { useState } from "react";
import Button from "../../components/Button";

// Helpers
import getLocale from "../../helpers/getLoacale";
import Table from "../../components/Table";
import { useEffect } from "react";
import Pagination from "../../components/Pagination";

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
   teamPage__memberInviteCodeBlock,
   teamPage__memberButtons,

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

   teamPage__toolTipText,
   teamPage__table,
} = classes;

const {
   userName,
   avatar,
   expireIn,
   level,
   invitedBy,
   teamLevel,
   activeMembers,
   totalMembers,
   coinsCount,
   delegated,
   table,
   currentPage,
   totalPages
} = window
   .initState?.team
   ? window.initState?.team
   : {
        userName: "Maksnavin",
        avatar: "",
        expireIn: 1663837440000,
        level: 10,
        invitedBy: "makeart",
        teamLevel: 1,
        activeMembers: 6,
        totalMembers: 395,
        coinsCount: 1065127,
        delegated: 790279,
        table: [
         {
            id: 15,
            avatar: null,
            name: "Artur",
            team: "Team #1",
            staking: 129837,
            invested: 81654,
            received: 96253,
            refers: []
         },
         {
            id: 83,
            avatar: "https://img.freepik.com/free-photo/happy-bearded-young-man-looks-with-joyful-expression-has-friendly-smile-wears-yellow-sweater-and-red-hat_295783-1388.jpg?w=1060&t=st=1674239791~exp=1674240391~hmac=f7c65e89e98cee9b77ee07561e4b9479ef0ce745fc1439a5e6b06c3c99d9af21",
            name: "Jhon",
            team: "Team #1",
            staking: 129837,
            invested: 81654,
            received: 96253,
            refers: [
               {
                  id: 127,
                  avatar: null,
                  name: "Elsa",
                  team: "Team #1",
                  staking: 129837,
                  invested: 81654,
                  received: 96253,
               },
               {
                  id: 128,
                  avatar: "https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=1060&t=st=1674239871~exp=1674240471~hmac=495750847276538f0e7c9e3e8e8b88704f4203d555ab3bff61ddc7ed88c4cd98",
                  name: "Eugen",
                  team: "Team #1",
                  staking: 129837,
                  invested: 81654,
                  received: 96253,
               }
            ]
         },
         {
            id: 71,
            avatar: null,
            name: "Omar",
            team: "Team #1",
            staking: 129837,
            invested: 81654,
            received: 96253,
            refers: [
               {
                  id: 95,
                  avatar: null,
                  name: "Cleo",
                  team: "Team #1",
                  staking: 129837,
                  invested: 81654,
                  received: 96253,
               }
            ]
         }
        ],
        currentPage: 1,
        totalPages: 5
     };

export default function TeamPage({setModal = () => {}, setToolTip = () => {}}) {

   const locale = getLocale();

   const expireInDate = new Date(expireIn);

   let hash = window.location.search;
   hash = hash.substring(1);
   hash = hash.split("&");
   const params = {};
   hash.forEach(part => {
      const tmp = part.split("=");
      params[tmp[0]] = tmp[1];
   })
   const [tableData, setTableData] = useState([]);

   const [activeList, setActiveList] = useState(() => {
      if (params["type"] === "activated") return "activated";
      if (params["type"] === "not_activated") return "not-activated";
      return "all";
   });

   const dataToTable = () => {
      
      const rows = [];

      table.forEach(data => {
         const tmpRow = {
            cells: [
               {
                  value: data.avatar ? data.avatar : EmptyAvatar,
                  type: "img"
               },
               {
                  value: data.name,
                  type: "text"
               },
               {
                  value: data.team,
                  type: "text"
               },
               {
                  value: data.staking,
                  type: "number"
               },
               {
                  value: data.invested,
                  type: "number"
               },
               {
                  value: data.received,
                  type: "number"
               }
            ],
            child: []
         };

         if (data.refers.length > 0) {
            data.refers.forEach(ref => {
               tmpRow.child.push([
                  {
                     value: ref.avatar ? ref.avatar : EmptyAvatar,
                     type: "img"
                  },
                  {
                     value: ref.name,
                     type: "text"
                  },
                  {
                     value: ref.team,
                     type: "text"
                  },
                  {
                     value: ref.staking,
                     type: "number"
                  },
                  {
                     value: ref.invested,
                     type: "number"
                  },
                  {
                     value: ref.received,
                     type: "number"
                  }
               ]);
            });
         }
         
         rows.push(tmpRow);
      });

      return rows;
   }

   useEffect(() => {
      setTableData(dataToTable());
   }, []);

   const toolTip = (e, i) => {
      const rect = e.target.getClientRects()[0];
      const content = [
          (props) => (
              <>
                  <p className={teamPage__toolTipText} {...props}>
                      {
                        lang.tableStakingInfo[locale]
                      }
                  </p>
              </>
          ),
          (props) => (
              <>
                  <p className={teamPage__toolTipText} {...props}>
                      {
                        lang.tableInvestedInfo[locale]
                      }
                  </p>
              </>
          ),
          (props) => (
              <>
                  <p className={teamPage__toolTipText} {...props}>
                      {
                        lang.tableReceivedInfo[locale]
                      }
                  </p>
              </>
          )
      ];
      
      setToolTip({
          content: content[i],
          x: rect.x + (rect.x < window.innerWidth / 2 ? 0 : rect.height),
          y: window.scrollY + rect.y + rect.height
      });
   }

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{lang.header_title[locale]}</PageHeader>
         <Layout>
            <Container className={teamPage__memberContainer}>
               <Avatar img={avatar} className={teamPage__memberAvatar} />
               <div className={teamPage__memberInfoBlock}>
                  <div className={teamPage__memberNameBlock}>
                     <h2 className={teamPage__memberName}>
                        {invitedBy !== null && invitedBy.length > 0 ? (
                           <p className={teamPage__memberInvitedBy}>{lang.invite[locale]} {invitedBy}</p>
                        ) : (
                        ""
                        )}
                        {userName}
                     </h2>
                     <Chip className={teamPage__memberExpireIn}>
                        {lang.stakingTo[locale]} {expireInDate.toLocaleDateString("ru-RU")} {expireInDate.getHours()}:
                        {("0" + expireInDate.getMinutes()).slice(-2)}
                     </Chip>
                  </div>
                  <div className={teamPage__memberLevel}>
                     <p className={teamPage__memberLevelName}>Bonus</p>
                     <Progressbar value={level} showPercents={true} className={teamPage__memberLevelProgress} />
                     <p className={teamPage__memberLevelName}>Coins</p>
                  </div>
                  <div className={teamPage__memberInviteCodeBlock}>
                     <Button
                        className={teamPage__memberButtons}
                     >{lang.upgrade[locale]}</Button>
                     <Button
                        className={teamPage__memberButtons}
                        variant="outline"
                        onClick={() => setModal((props) => <PromocodeModal {...props} />)}
                     >{lang.enterPromo[locale]}</Button>
                  </div>
               </div>
            </Container>
            <Layout direction="vertical">
               <Container className={teamPage__numbersDataBlock}>
                  <h2 className={teamPage__numbersDataTitle}>{lang.mActivCount[locale]}</h2>
                  <p className={teamPage__numbersDataValue}>
                     {activeMembers.toLocaleString("ru-RU")}
                     <span className={teamPage__numbersDataValue_small}>
                        {" "}
                        / {totalMembers.toLocaleString("ru-RU")}
                     </span>
                  </p>
               </Container>
               <Container className={teamPage__numbersDataBlock}>
                  <h2 className={teamPage__numbersDataTitle}>{lang.coinsCount[locale]}</h2>
                  <p className={teamPage__numbersDataValue}>{coinsCount.toLocaleString("ru-RU")}</p>
               </Container>
               <Container className={teamPage__numbersDataBlock}>
                  <h2 className={teamPage__numbersDataTitle}>{lang.delegatedCount[locale]}</h2>
                  <p className={teamPage__numbersDataValue}>{delegated.toLocaleString("ru-RU")}</p>
               </Container>
            </Layout>
         </Layout>

         <PageHeader className={teamPage__listHeader}>{lang.level[locale]} {teamLevel}</PageHeader>
         <p className={teamPage__listPreText}>{lang.invitedMembers[locale]}</p>
         <div className={teamPage__listNav}>
            <a
               href="?type=all"
               onClick={() => setActiveList("all")}
               className={teamPage__listNavLinks + (activeList === "all" ? " " + teamPage__listNavLinks_active : "")}
            >
               <span className={teamPage__listNavLinksText}>{lang.all[locale]}</span>&nbsp;({totalMembers.toLocaleString("ru-RU")})
            </a>
            <a
               href="?type=activated"
               onClick={() => setActiveList("activated")}
               className={
                  teamPage__listNavLinks + (activeList === "activated" ? " " + teamPage__listNavLinks_active : "")
               }
            >
               <span className={teamPage__listNavLinksText}>{lang.activated[locale]}</span>&nbsp;(
               {activeMembers.toLocaleString("ru-RU")})
            </a>
            <a
               href="?type=not_activated"
               onClick={() => setActiveList("not-activated")}
               className={
                  teamPage__listNavLinks + (activeList === "not-activated" ? " " + teamPage__listNavLinks_active : "")
               }
            >
               <span className={teamPage__listNavLinksText}>{lang.notActivated[locale]}</span>&nbsp;(
               {(totalMembers - activeMembers).toLocaleString("ru-RU")})
            </a>
         </div>

         <Table
            className={teamPage__table}
            headers={[
               {
                  name: "",
                  width: "40px",
                  toolTip: null
               },
               {
                  name: lang.tableName[locale],
                  width: "1fr",
                  toolTip: null
               },
               {
                  name: lang.tableTeam[locale],
                  width: "1fr",
                  toolTip: null
               },
               {
                  name: lang.tableStaking[locale],
                  width: "1fr",
                  toolTip: (e) => toolTip(e, 0)
               },
               {
                  name: lang.tableInvested[locale],
                  width: "1fr",
                  toolTip: (e) => toolTip(e, 1)
               },
               {
                  name: lang.tableReceived[locale],
                  width: "1fr",
                  toolTip: (e) => toolTip(e, 2)
               }
            ]}
            rows={tableData}
            hasChild={true}
         />
         <Pagination
            curentPage={currentPage}
            totalPages={totalPages}
            href="/profile/team"
            params={params["type"] ? "&type=" + params["type"] : ""}
         />
      </>
   );
}
