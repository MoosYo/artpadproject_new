import Button from "../../components/Button";
import Container from "../../components/Container";
import Countdown from "../../components/Countdown";
import Error from "../../components/Icons/error";
import ProgressbarTimestamp from "../../components/ProgressbarTimestamp";
import StoryBoard from "../../components/StoryBoard";
import TabControl from "../../components/TabControl";
import classes from "./index.module.scss";

const {
   project__layout,
   project__head,
   project__title,
   project__links,
   project__body,
   project__info,
   project__container,
   project__container_magenta,
   project__container_lowPadding,
   project__container_left,
   project__cards,
   project__info__items,
   project__info__items__title,
   project__info__items__result,
   project__progress,
   project__progress__title,
   card__title,
   card__attantions,
   card__rejected,
   card__timer,
   card__block,
   container__alert,
} = classes;

const { data, heder, links, info, news, story } = window.initState
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
           swapEnd: 1670428800000,
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
        news: [
           {
              id: 0,
              date: "now",
              text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
              socials: [
                 {
                    title: "Web",
                    href: "#",
                 },
                 {
                    title: "Twitter",
                    href: "#",
                 },
                 {
                    title: "Telegramm",
                    href: "#",
                 },
              ],
           },
           {
              id: 1,
              date: "29 Aug",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              socials: [
                 {
                    title: "Web",
                    href: "#",
                 },
                 {
                    title: "Twitter",
                    href: "#",
                 },
                 {
                    title: "Telegramm",
                    href: "#",
                 },
              ],
           },
           {
              id: 2,
              date: "28 Aug",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
              socials: [
                 {
                    title: "Web",
                    href: "#",
                 },
                 {
                    title: "Twitter",
                    href: "#",
                 },
                 {
                    title: "Telegramm",
                    href: "#",
                 },
              ],
           },
        ],
        story: [
           {
              title: "Upcoming",
              active: false,
              points: [
                 {
                    title: "Whitelist start —",
                    time: 1672121180,
                 },
                 {
                    title: "Whitelist end —",
                    time: 1669529116,
                 },
              ],
           },
           {
              title: "Swap",
              active: true,
              points: [
                 {
                    title: "Whitelist start —",
                    time: 1672121180,
                 },
                 {
                    title: "Whitelist end —",
                    time: 1669529116,
                 },
              ],
           },
           {
              title: "Filled",
              active: false,
              points: [],
           },
           {
              title: "Claimable",
              active: false,
              points: [
                 {
                    title: "Next claim —",
                    time: 1672121180,
                 },
              ],
           },
           {
              title: "Ended",
              active: false,
              points: [],
           },
        ],
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
            <StoryBoard steps={story} />
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
               <div className={project__cards}>
                  <Container className={project__container + " " + project__container_left}>
                     <h3 className={card__title}>SWAP</h3>
                     <div className={card__attantions}>
                        <div className={card__rejected}>
                           <Error />
                           <p>You did not apply IDO of your application was rejected</p>
                        </div>
                        <div className={card__timer}>
                           <h3 className={card__title}>SWAP ENDS AFTER</h3>
                           <Countdown className={card__block} timestamp={info.swapEnd} />
                        </div>
                     </div>
                     <Container
                        className={
                           project__container +
                           " " +
                           project__container_magenta +
                           " " +
                           project__container_lowPadding +
                           " " +
                           container__alert +
                           " " +
                           project__container_left
                        }
                     >
                        <p>Dear investor!</p>
                        <p>
                           Pay your attension that SPORTPZCHAIN token (SPN) deposit is availible on several blockchain
                           networks: BNB Chain, Polygon.
                        </p>
                        <p>The distribution of SPORTPZCHAIN token will carried out in polygon ony!</p>
                     </Container>
                  </Container>
                  <Container className={project__container + " " + project__container_left}>
                     <h3 className={card__title}>PROJECT DESCREPTION</h3>
                     <TabControl array={news} />
                  </Container>
               </div>
            </div>
         </div>
      </>
   );
}
