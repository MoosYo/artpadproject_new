import classes from "./styles.module.scss";

const { progressbar, progressbar__percents, progressbar__wrapper, progressbar__bar } = classes;

export default function Progressbar(props) {
   const { value, showPercents, className } = props;

   return (
      <div className={progressbar + (className ? " " + className : "")}>
         {showPercents ? <p className={progressbar__percents}>{value}%</p> : ""}
         <div className={progressbar__wrapper}>
            <div className={progressbar__bar} style={{ maxWidth: value + "%" }} />
         </div>
      </div>
   );
}
