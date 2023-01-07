import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";
import Button from "../../components/Button";
import RangeSlider from "../../components/RangeSlider";
import { useState } from "react";

const {
   steaking__layout,
   steaking__content,
   steaking__title,
   steaking__subtext,
   steaking__subtext_magenta,
   steaking__text,
   steaking__cards,
   steaking__wrapper,
   steaking__time,
   steaking__timeHeader,
   steaking__timeTitle,
   steaking__timeValue,

   card,
   card__title,
   card__subtext,
   card__label,
   card__chips,
   card__button,
} = classes;

const { level, staked, balance, timeRange, selectedTime, isTokenUnlocked } = window.initState?.staking
   ? window.initState?.staking
   : {
        level: 7,
        staked: 750000,
        balance: [
           { summ: 0, state: true },
           { summ: 0, state: false },
        ],
        timeRange: ["1 month", "3 month’s", "6 month’s", "12 month’s"],
        selectedTime: 1,
        isTokenUnlocked: true,
     };

export default function SteakingPage(props) {
   const local = "ru-RU";

   const [selected, setSelected] = useState(selectedTime);

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>Stacking</PageHeader>
         <div className={steaking__layout}>
            <div className={steaking__content}>
               <h3 className={steaking__title}>
                  level: <span className={steaking__subtext}>{level}</span>
               </h3>
               <h3 className={steaking__title}>
                  staked:{" "}
                  <span className={steaking__subtext + " " + steaking__subtext_magenta}>
                     {staked.toLocaleString()} wARTR
                  </span>
               </h3>
               {isTokenUnlocked !== null ? (
                  <p className={steaking__text}>Your token are {isTokenUnlocked ? "un" : ""}locked</p>
               ) : (
                  ""
               )}
            </div>
            <div className={steaking__cards}>
               {balance.map(({ summ, state }, key) => (
                  <div className={steaking__wrapper} key={key}>
                     <Container className={card}>
                        <span className={card__title}>
                           Balance: <span className={card__subtext}>{summ.toLocaleString()} wARTR</span>
                        </span>
                        <div className={card__label}>
                           <span className={card__chips}>Max</span>
                           <p>WARTR</p>
                        </div>
                     </Container>
                     <Button
                        className={card__button}
                        variant={"solid"}
                        onClick={() => {
                           console.log("Click");
                        }}
                     >
                        <span>{state ? "Stake" : "Unstake"}</span>
                     </Button>
                  </div>
               ))}
            </div>
            <div className={steaking__time}>
               <div className={steaking__timeHeader}>
                  <h2 className={steaking__timeTitle}>Steaking time</h2>
                  <p className={steaking__timeValue}>{timeRange[selected]}</p>
               </div>
               <RangeSlider values={timeRange} selected={selected} onChange={setSelected} />
            </div>
         </div>
      </>
   );
}
