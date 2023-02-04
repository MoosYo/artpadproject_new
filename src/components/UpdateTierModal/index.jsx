import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";

// Helpers
import getLocale from "../../helpers/getLoacale";
import Arrow from "../Icons/arrow";
import { useState } from "react";
import RangeSlider from "../RangeSlider";

const {
    block,
    block__header,
    block__headerTitle,
    block__closeBtn,
    block__closeBtnIcon,
    block__button,

    header,
    header__text,
    header__select,
    header__selectText,
    header__selectBlock,
    header__selectBlockVal,
    header__selectList,
    header__selectList_shown,
    header__selectListItem,
    header__selectListItem_active,

    upgradeContent,
    upgradeContent__text,
    upgradeContent__text_magenta,
    upgradeContent__bar,
    upgradeContent__barLine,
    upgradeContent__barLineFill,
    upgradeContent__barPoint,
    upgradeContent__barInfo,
    upgradeContent__barText,
    upgradeContent__cards,
    upgradeContent__card,
    upgradeContent__cardText,
    upgradeContent__cardText_bold,
    upgradeContent__tag,
    upgradeContent__info,
    upgradeContent__rangeMobile
} = classes;


const staking = window.initState?.staking
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

const UpdateTierModal = ({onClose = () => {}}) => {

    const locale = getLocale();
   
   const [level, setLevel] = useState(staking.level ? staking.level : 0);
   const [tierMultiplier, setTierMultiplier] = useState(staking.tierMultiplier ? staking.tierMultiplier : 1);
   const [staked, setStaked] = useState(staking.staked ? staking.staked : 0);
   const [stakedMultiplier, setStakedMultiplier] = useState(staking.stakedMultiplier ? staking.stakedMultiplier : 1);
   const [balanceSummBC, setBalanceSummBC] = useState(staking.balanceSummBC ? staking.balanceSummBC : 0);
   const [balanceSumm, setBalanceSumm] = useState(staking.balanceSumm ? staking.balanceSumm : 0);
   const [balanceState, setBalanceState] = useState(staking.balanceState ? staking.balanceState : true);
   const [balancePercentage, setBalancePercentage] = useState(staking.balancePercentage ? staking.balancePercentage : 0);
   const [timeRange, setTimeRange] = useState(staking.timeRange ? staking.timeRange : ["1 month", "3 month’s", "6 month’s", "12 month’s"]);
   const [selectedTime, setSelectedTime] = useState(0);
   const [isTokenUnlocked, setIsTokenUnlocked] = useState(staking.isTokenUnlocked ? staking.isTokenUnlocked : true);
   const [stakingResult, setStakingResult] = useState(staking.stakingResult ? staking.stakingResult : 0);
   const [dailyReward, setDailyReward] = useState(staking.dailyReward ? staking.dailyReward : 0);
   const [stakingEnd, setStakingEnd] = useState(staking.stakingEnd ? staking.stakingEnd : 0);

    const [selectedTier, selectTier] = useState(null);
    const [listState, setListState]  = useState(false);

    return (
        <div className={block}>
           <div className={block__header}>
              <h2 className={block__headerTitle}>{lang.header[locale]}</h2>
  
              <button className={block__closeBtn} onClick={onClose}>
                 <CloseIcon className={block__closeBtnIcon} />
              </button>
           </div>
           <form action="" method="POST">
                <div className={header}>
                    <h2 className={header__text}>
                        <b>{lang.yourLevel[locale]}:</b> {lang.tier[locale]} {level}
                    </h2>

                    <div className={header__select}>
                        <p className={header__selectText}>
                            {lang.upgrate[locale]}
                        </p>

                        <div className={header__selectBlock} onMouseLeave={() => setListState(false)}>
                            <div className={header__selectBlockVal} onClick={() => setListState(listState ? false : true)}>
                                {
                                    selectedTier ? <>
                                        {lang.tier[locale] + " " + selectedTier}
                                        <Arrow style={{transform: listState ? "rotate(-90deg)" : null}} />
                                    </>: (<>
                                        {lang.select[locale]}
                                        <Arrow style={{transform: listState ? "rotate(-90deg)" : null}} />
                                    </>)
                                }
                            </div>
                            <div className={header__selectList + (listState ? " " + header__selectList_shown : "")}>
                                {
                                    [1,2,3,4,5,6,7,8,9,10].map(val => (
                                        <div
                                            className={header__selectListItem + (val > level ? " " + header__selectListItem_active: "")}
                                            key={val}
                                            onClick={() => {if (val > level) { selectTier(val); setListState(false); }}}
                                        >
                                            {lang.tier[locale]} {val}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            
                {
                    selectedTier ? (
                        <div className={upgradeContent}>
                            <p className={upgradeContent__text}>
                                {lang.needPay[locale]}: {(10000).toLocaleString(locale)}&nbsp;wARTR
                            </p>
                            <p className={upgradeContent__text}>
                                {lang.canPay[locale]}: {(7000).toLocaleString(locale)}&nbsp;BC
                            </p>
                            <p className={upgradeContent__text}>
                                
                            </p>
                            <p className={upgradeContent__text}>
                                {lang.multiplierWas[locale]}: <span className={upgradeContent__text_magenta}>x15</span>
                            </p>
                            <p className={upgradeContent__text}>
                                {lang.with[locale]} <span className={upgradeContent__text_magenta} style={{textDecoration: "underline"}}>{level} {lang.tier[locale]}</span> {lang.multiplierBe[locale]}: <span className={upgradeContent__text_magenta}>x25</span>
                            </p>
                            <p className={upgradeContent__text}>
                                
                            </p>

                            <div className={upgradeContent__bar}>
                                <div className={upgradeContent__barLine}>
                                    <div className={upgradeContent__barLineFill} style={{width: 60 + "%"}} />

                                    <div className={upgradeContent__barPoint} style={{left: "0px"}} />
                                    <div className={upgradeContent__barPoint} style={{left: "70%"}} />
                                    <div className={upgradeContent__barPoint} style={{right: "0px"}} />
                                </div>

                                <div className={upgradeContent__barInfo}>
                                    <p className={upgradeContent__barText}>{lang.useBonus[locale]} 70%</p>
                                    <p className={upgradeContent__barText} style={{left: 70 + "%", position: "absolute"}}>30% {lang.onlyW[locale]}</p>
                                </div>
                            </div>


                            <RangeSlider
                                values={timeRange}
                                selected={selectedTime}
                                onChange={setSelectedTime}
                            />
                            <p className={upgradeContent__rangeMobile}>
                                {timeRange[selectedTime]}
                            </p>

                            <div className={upgradeContent__cards}>
                                <div className={upgradeContent__card}>
                                    <p className={upgradeContent__cardText}>
                                        <span className={upgradeContent__cardText_bold}>{lang.balance[locale]}:</span> 0 BC
                                    </p>

                                    <div className={upgradeContent__tag}>{lang.max[locale]}</div>

                                    <p className={upgradeContent__info}>
                                        Bonus coin
                                    </p>
                                </div>
                                
                                <div className={upgradeContent__card}>
                                    <p className={upgradeContent__cardText}>
                                        <span className={upgradeContent__cardText_bold}>{lang.balance[locale]}:</span> 0 wARTR
                                    </p>

                                    <div className={upgradeContent__tag}>{lang.max[locale]}</div>

                                    <p className={upgradeContent__info}>
                                        wARTR
                                    </p>
                                </div>
                            </div>

                            <Button
                                type={"submit"}
                                className={block__button}
                            >{lang.upgradeTier[locale]}</Button>
                        </div>
                    ) : ""
                }
           </form>
        </div>
    );
}

export default UpdateTierModal;