import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";

const {
   steaking__layout,
   steaking__content,
   steaking__title,
   steaking__subtext,
   steaking__subtext_magenta,
   steaking__text,
   steaking__cards,
   card,
   card__title,
   card__subtext,
   card__label,
   card__chips,
} = classes;

const { data, level, staked } = window.initState
   ? window.initState
   : {
        data: "text",
        level: 7,
        staked: "750,000",
     };

export default function SteakingPage(props) {
   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>Steacking</PageHeader>
         <div className={steaking__layout}>
            <div className={steaking__content}>
               <h3 className={steaking__title}>
                  level: <span className={steaking__subtext}>tier {level}</span>
               </h3>
               <h3 className={steaking__title}>
                  staked: <span className={steaking__subtext + " " + steaking__subtext_magenta}>{staked} wARTR</span>
               </h3>
               <p className={steaking__text}>Your token are unlocked</p>
            </div>
            <div className={steaking__cards}>
               <Container className={card}>
                  <span className={card__title}>
                     Balance: <span className={card__subtext}>0 wARTR</span>
                  </span>
                  <div className={card__label}>
                     <span className={card__chips}>Max</span>
                     <p>WARTR</p>
                  </div>
               </Container>
               <Container className={card}>
                  <span className={card__title}>
                     Balance: <span className={card__subtext}>0 wARTR</span>
                  </span>
                  <div className={card__label}>
                     <span className={card__chips}>Max</span>
                     <p>WARTR</p>
                  </div>
               </Container>
            </div>
         </div>
      </>
   );
}
