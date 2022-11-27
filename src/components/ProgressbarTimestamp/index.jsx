import classes from "./styles.module.scss";

const {
   progressbar,
   progressbar__percents,
   progressbar__wrapper,
   progressbar__bar,
   progressbar__head,
   progressbar__timestamp,
   progressbar__footer,
   progressbar__coin,
   progressbar__coin_minGap,
} = classes;

export default function ProgressbarTimestamp({ value, timestamp, coin, total, current, showPercents, className }) {
   return (
      <div className={progressbar + (className ? " " + className : "")}>
         <div className={progressbar__head}>
            <p className={progressbar__timestamp}>{"Swap end - " + timestamp}</p>
            {showPercents ? <p className={progressbar__percents}>{value}%</p> : ""}
         </div>
         <div className={progressbar__wrapper}>
            <div className={progressbar__bar} style={{ maxWidth: value + "%" }} />
         </div>
         <div className={progressbar__footer}>
            <div className={progressbar__coin}>
               <img src={coin.img} alt="" />
               {coin.total.toLocaleString("ru-RU")}
            </div>
            <div className={progressbar__coin + " " + progressbar__coin_minGap}>
               <p>{current.toLocaleString("ru-RU") + " / " + total.summ.toLocaleString("ru-RU")}</p>
               <img src={total.img} alt="" />
            </div>
         </div>
      </div>
   );
}
