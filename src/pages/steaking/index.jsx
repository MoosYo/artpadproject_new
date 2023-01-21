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

// Helpers
import getLocale from "../../helpers/getLoacale";
import UpdateTierModal from "../../components/UpdateTierModal";

const {
   steaking__layout,
   steaking__content,
   steaking__contentLeft,
   steaking__contentRight,
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
   card__button_outline,

   steaking__contentCard,
   steaking__contentCardTitle,
   steaking__contentCardData,
   steaking__contentCardText,
   steaking__actions,
   steaking__actionsBlock
} = classes;

const {
   level,
   tierMultiplier,
   staked,
   stakedMultiplier,
   balanceSumm,
   balanceState,
   balancePercentage,
   timeRange,
   selectedTime,
   isTokenUnlocked,
   stakingResult,
   dailyReward,
   stakingEnd
} = window.initState?.staking
   ? window.initState?.staking
   : {
        level: 7,
        tierMultiplier: 15,
        staked: 750000,
        stakedMultiplier: 15,
        balanceSumm: 0,
        balanceState: true,
        balancePercentage: 10000,
        timeRange: ["1 month", "3 month’s", "6 month’s", "12 month’s"],
        selectedTime: 1,
        isTokenUnlocked: true,
        stakingResult: 12000,
        dailyReward: 1959,
        stakingEnd: 1684752360
     };

export default function SteakingPage({setModal = () => {}}) {

   const local = getLocale();

   const [selected, setSelected] = useState(selectedTime);

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <div className={steaking__layout}>
            <div className={steaking__content}>
               <div className={steaking__contentLeft}>
                  <h3 className={steaking__title}>
                     {localize.level[local]}: <span className={steaking__subtext}>{localize.tier[local]} {level}</span>&nbsp;<br className={steaking__titleMobDrop} />
                     <span className={steaking__subtext + " " + steaking__subtext_small}>
                        <span
                           onClick={() => setModal(UpdateTierModal)}
                           className={steaking__subtext_magenta}
                           style={{cursor: "pointer"}}
                        >
                              {localize.upgradeTo[local]}
                        </span>
                     </span>
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
               
               <div className={steaking__contentRight}>
                  <div className={steaking__contentCard}>
                     <h2 className={steaking__contentCardTitle}>
                        {localize.daily[local]}
                     </h2>
                     <div className={steaking__contentCardData}>
                        <p className={steaking__contentCardText}>
                           {dailyReward.toLocaleString(local)} bonus coin
                        </p>
                        <p className={steaking__contentCardText} />
                     </div>
                  </div>
                  <div className={steaking__contentCard}>
                     <h2 className={steaking__contentCardTitle}>
                        {localize.stakingEnd[local]}
                     </h2>
                     <div className={steaking__contentCardData}>
                        <p className={steaking__contentCardText}>
                           {new Date(stakingEnd * 1000).toLocaleDateString(local)}
                        </p>
                        <p className={steaking__contentCardText}>
                           {new Date(stakingEnd * 1000).toLocaleTimeString(local)}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className={steaking__cards}>
               
               <div className={steaking__wrapper}>
                  <Container className={card}>
                     <span className={card__title}>
                        {localize.balance[local]}:{" "}
                        <span className={card__subtext}>{balanceSumm.toLocaleString()} wARTR</span>
                     </span>
                     <div className={card__label}>
                        <span className={card__chips}>{localize.max[local]}</span>
                        <p>WARTR</p>
                     </div>
                  </Container>
                  <div className={steaking__actions}>
                     <div className={steaking__actionsBlock}>
                        <Button
                           className={card__button + " " + card__button_outline}
                           variant={"outline"}
                           onClick={() => {
                              console.log("Click");
                           }}
                        >
                           <span>{localize.frozen[local]}</span>
                        </Button>
                        <Button
                           className={card__button + " " + card__button_outline}
                           variant={"outline"}
                           onClick={() => {
                              console.log("Click");
                           }}
                        >
                           <span>{localize.percentage[local]} ({balancePercentage.toLocaleString(local)} wARTR)</span>
                        </Button>
                     </div>

                     <div className={steaking__actionsBlock}>
                        <Button
                           className={card__button + (balanceState ? " " + card__button_outline : "")}
                           variant={balanceState ? "outline" : "solid"}
                           onClick={() => {
                              console.log("Click");
                           }}
                        >
                           <span>{localize.unstake[local]}</span>
                        </Button>
                        <Button
                           className={card__button + (!balanceState ? " " + card__button_outline : "")}
                           variant={balanceState ? "solid" : "outline"}
                           onClick={() => {
                              console.log("Click");
                           }}
                        >
                           <span>{localize.stake[local]}</span>
                        </Button>
                     </div>
                  </div>
               </div>
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
