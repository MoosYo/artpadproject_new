import classes from "./styles.module.scss";
import localize from "./local.json";

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
   steaking__titleMobDrop,
   steaking__subtext,
   steaking__subtext_magenta,
   steaking__subtext_small,
   steaking__text,
   steaking__cards,
   steaking__wrapper,
   steaking__time,
   steaking__timeHeader,
   steaking__timeTitle,
   steaking__timeValue,

   steaking__timeTitleText,
   steaking__timeTitleNote,
   steaking__resultText,
   steaking__resultValue,
   steaking__resultLink,
   steaking__timeNote,

   card,
   card__title,
   card__subtext,
   card__label,
   card__chips,
   card__button,
} = classes;

const { level, nextLevel, tierMultiplier, staked, stakedMultiplier, balance, timeRange, selectedTime, isTokenUnlocked, stakingResult } = window.initState?.staking
   ? window.initState?.staking
   : {
        level: 7,
        nextLevel: 62000,
        tierMultiplier: 15,
        staked: 750000,
        stakedMultiplier: 15,
        balance: [
           { summ: 0, state: true },
           { summ: 0, state: false },
        ],
        timeRange: ["1 month", "3 month’s", "6 month’s", "12 month’s"],
        selectedTime: 1,
        isTokenUnlocked: true,
        stakingResult: 12000
     };

export default function SteakingPage(props) {
   const local = "en-US";

   const [selected, setSelected] = useState(selectedTime);

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <div className={steaking__layout}>
            <div className={steaking__content}>
               <h3 className={steaking__title}>
                  {localize.level[local]}: <span className={steaking__subtext}>{localize.tier[local]} {level}</span>&nbsp;<br className={steaking__titleMobDrop} />
                  <span className={steaking__subtext + " " + steaking__subtext_small}><a href="###" className={steaking__subtext_magenta}>{localize.upgradeTo[local]} {level + 1}</a> ({nextLevel.toLocaleString()} BonusCoin)</span>
               </h3>

               <h3 className={steaking__title}>
                  {localize.tierMultiplier[local]}:&nbsp;
                  <span className={steaking__subtext + " " + steaking__subtext_magenta}>
                     x{tierMultiplier}
                  </span>
               </h3>
               
               <h3 className={steaking__title}>
                  {localize.staced[local]}:&nbsp;
                  <span className={steaking__subtext + " " + steaking__subtext_magenta}>
                     {staked.toLocaleString()} wARTR
                  </span>
               </h3>

               <h3 className={steaking__title}>
                  {localize.stakedMultiplier[local]}:&nbsp;
                  <span className={steaking__subtext + " " + steaking__subtext_magenta}>
                     x{stakedMultiplier}
                  </span>
               </h3>

               {isTokenUnlocked !== null ? (
                  <p className={steaking__text}>
                     {isTokenUnlocked ? localize.token_unlocked[local] : localize.token_locked[local]}
                  </p>
               ) : (
                  ""
               )}
            </div>
            <div className={steaking__cards}>
               {balance.map(({ summ, state }, key) => (
                  <div className={steaking__wrapper} key={key}>
                     <Container className={card}>
                        <span className={card__title}>
                           {localize.balance[local]}:{" "}
                           <span className={card__subtext}>{summ.toLocaleString()} wARTR</span>
                        </span>
                        <div className={card__label}>
                           <span className={card__chips}>{localize.max[local]}</span>
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
                        <span>{state ? localize.stake[local] : localize.unstake[local]}</span>
                     </Button>
                  </div>
               ))}
            </div>
            <div className={steaking__time}>
               <div className={steaking__timeHeader}>
                  <h2 className={steaking__timeTitle}>
                     <span className={steaking__timeTitleText}>{localize.stacking_time[local]}</span>
                     <span className={steaking__timeTitleNote}>
                        <span className={steaking__resultText}>{localize.stakingResult[local]}:</span>&nbsp;
                        <span className={steaking__resultValue}>
                           {stakingResult.toLocaleString()} <a href="###" className={steaking__resultLink}>BonusCoin</a>
                        </span>
                     </span>
                  </h2>
                  <p className={steaking__timeValue}>{timeRange[selected]}</p>
               </div>
               <RangeSlider values={timeRange} selected={selected} onChange={setSelected} />

               <div className={steaking__timeNote}>
                  <span className={steaking__resultText}>{localize.stakingResult[local]}:</span>
                  <span className={steaking__resultValue}>
                     {stakingResult.toLocaleString()} <a href="###" className={steaking__resultLink}>BonusCoin</a>
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}
