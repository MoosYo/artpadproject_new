import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";
import PageHeader from "../../components/PageHeader";
import Container from "../../components/Container";
import Button from "../../components/Button";
import RangeSlider from "../../components/RangeSlider";

const {
   steaking__layout,
   steaking__content,
   steaking__title,
   steaking__subtext,
   steaking__subtext_magenta,
   steaking__text,
   steaking__cards,
   steaking__wrapper,
   card,
   card__title,
   card__subtext,
   card__label,
   card__chips,
   card__button,
   curd__buttonText,
} = classes;

const { level, staked, balance, timeRange, selectedTime } = window.initState
   ? window.initState
   : {
        level: 7,
        staked: "750,000",
        balance: [
           { summ: 0, state: true },
           { summ: 0, state: false },
        ],
        timeRange: [
            "1 month",
            "3 month’s",
            // "PUSSY",
            "6 month’s",
            "12 month’s"
        ],
        selectedTime: 1
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
               {balance.map(({ summ, state }, key) => (
                  <div className={steaking__wrapper} key={key}>
                     <Container className={card}>
                        <span className={card__title}>
                           Balance: <span className={card__subtext}>{summ} wARTR</span>
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
            <div className="">
               <div className="">
                  <h2 className="">Steaking time</h2>
                  <p className="">3 month</p>
               </div>
               <RangeSlider
                  values={timeRange}
                  selected={selectedTime}
               />
            </div>
         </div>
      </>
   );
}
