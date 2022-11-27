import Button from "../../components/Button";
import Container from "../../components/Container";
import ProgressbarTimestamp from "../../components/ProgressbarTimestamp";
import classes from "./index.module.scss";

const {
   project__layout,
   project__head,
   project__title,
   project__links,
   project__body,
   project__info,
   project__container,
   project__cards,
   project__info__items,
   project__info__items__title,
   project__info__items__result,
   project__progress,
   project__progress__title,
} = classes;

const { data, heder, links, info } = window.initState
   ? window.initState
   : {
        data: "text",
        heder: {
           img: "https://icodrops.com/wp-content/uploads/2022/07/yycZmh7_400x400.png",
           title: "SEOR",
        },
        links: [
           { title: "Telegram", href: "#" },
           { title: "Twitter", href: "#" },
           { title: "Whitepeper", href: "#" },
           { title: "Tokenomics", href: "#" },
        ],
        info: {
           currency: "usd",
           raiseCurrency: {
              title: "USDT",
              img: "https://w7.pngwing.com/pngs/840/253/png-transparent-usdt-cryptocurrencies-icon-thumbnail.png",
           },
           exchangeRate: "1 spn = 0.0024 usdt",
           swapAmount: {
              summ: 20833333.33,
              type: "spn",
           },
           totalRaise: 50000,
           claim: "Claim on Gagarin",
           claimImg: {
              title: "Polygon",
              img: "https://icodrops.com/wp-content/uploads/2022/07/yycZmh7_400x400.png",
           },
           swapEnd: "07 september, 2022 19:00",
           progress: 10,
           coin: {
              total: 496.0,
              img: "https://w7.pngwing.com/pngs/840/253/png-transparent-usdt-cryptocurrencies-icon-thumbnail.png",
           },
           current: 206666.66,
           total: {
              summ: 20833333.33,
              img: "https://icodrops.com/wp-content/uploads/2022/07/yycZmh7_400x400.png",
           },
        },
     };

export default function ProjectPage(props) {
   const getCurrency = (cur) => {
      switch (cur) {
         case "usd": {
            return "$";
            break;
         }
         case "eur": {
            return "€";
            break;
         }
         case "rub": {
            return "₽";
            break;
         }

         default:
            break;
      }
   };

   return (
      <>
         <div className={project__layout}>
            <div className={project__head}>
               <img src={heder.img} alt={heder.title} />
               <h2 className={project__title}>{heder.title}</h2>
            </div>
            <ul className={project__links}>
               {links.map(({ title, href }, key) => (
                  <li key={key}>
                     <Button variant={"outline"} href={href}>
                        {title}
                     </Button>
                  </li>
               ))}
            </ul>
            <div className={project__body}>
               <Container className={project__container}>
                  <aside className={project__info}>
                     <ul className={project__info__items}>
                        <li>
                           <span className={project__info__items__title}>Raise Currency</span>
                           <span className={project__info__items__result}>
                              <img src={info.raiseCurrency.img} alt="" />
                              {info.raiseCurrency.title}
                           </span>
                        </li>
                        <li>
                           <span className={project__info__items__title}>Exchange Rate</span>
                           <span className={project__info__items__result}>{info.exchangeRate}</span>
                        </li>
                        <li>
                           <span className={project__info__items__title}>Swap Amount</span>
                           <span className={project__info__items__result}>
                              {info.swapAmount.summ.toLocaleString("ru-RU") + " " + info.swapAmount.type}
                           </span>
                        </li>
                        <li>
                           <span className={project__info__items__title}>Total Raise</span>
                           <span className={project__info__items__result}>
                              {getCurrency(info.currency) + info.totalRaise.toLocaleString("ru-RU")}
                           </span>
                        </li>
                        <li>
                           <span className={project__info__items__title}>Claim</span>
                           <span className={project__info__items__result}>{info.claim}</span>
                        </li>
                        <li>
                           <span className={project__info__items__title}>Claim</span>
                           <span className={project__info__items__result}>
                              <img src={info.claimImg.img} alt="" />
                              {info.claimImg.title}
                           </span>
                        </li>
                     </ul>
                     <hr />
                     <div className={project__progress}>
                        <span className={project__progress__title}>50% TGE, remaining in two months (25%:25%)</span>
                        <ProgressbarTimestamp
                           value={info.progress}
                           coin={info.coin}
                           total={info.total}
                           current={info.current}
                           timestamp={info.swapEnd}
                           showPercents={true}
                        />
                     </div>
                  </aside>
               </Container>
               <div className={project__cards}></div>
            </div>
         </div>
      </>
   );
}
