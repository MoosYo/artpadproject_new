import { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/Button";
import ConnectWalletModal from "../../components/ConnectWalleteModal";
import Container from "../../components/Container";
import Countdown from "../../components/Countdown";
import CheckIcon from "../../components/Icons/check";
import CrossIcon from "../../components/Icons/Cross";
import Error from "../../components/Icons/error";
import SliderArrowIcon from "../../components/Icons/SliderArrow";
import SocialButton from "../../components/Icons/SocialButton";
import ProgressbarTimestamp from "../../components/ProgressbarTimestamp";
import StoryBoard from "../../components/StoryBoard";
import TabControl from "../../components/TabControl";
import ProjectClaimBlock from "./claim/claim";
import classes from "./index.module.scss";
import statesClasses from "./states.module.scss";

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

   project__socials,
   project__socialsLink,
   project__socialsLinkImg,
   project__tag,

   slider,
   slider__header,
   slider__title,
   slider__control,
   slider__counter,
   slider__button,
   slider__track,
   slider_slide,
   slider__img,
   slider_link,

   registrationCard,
   registrationCard__block,
   registrationCard__title,
   registrationCard__check,
   registrationCard__checkItem,
   registrationCard__checkCircle,
   registrationCard__checkCircle_check,
   registrationCard__checkIcon,
   registrationCard__checkIcon_check,
   registrationCard__checkText,
   registrationCard__button,
} = classes;

const {
   notRegist,
   notRegist__block,
   notRegist__block_card,
   notRegist__title,
   notRegist__timer,
   notRegist__blockText,
   notRegist__link,

   upcomingBlock,
   upcomingBlock__block,
   upcomingBlock__title,
   upcomingBlock__checks,
   upcomingBlock__check,
   upcomingBlock__checkIcon,
   upcomingBlock__checkIcon_check,
   upcomingBlock__checkText,
   upcomingBlock__timer,
   upcomingBlock__buttons,
   upcomingBlock__button,
   upcomingBlock__buttonOutline,

   connectWalletBlock,
   connectWalletBlock__block,
   connectWalletBlock__title,
   connectWalletBlock__button,
   connectWalletBlock__timer,

   allocationBlock,
   allocationBlock__block,
   allocationBlock__block_right,
   allocationBlock__title,
   allocationBlock__wrapper,
   allocationBlock__row,
   allocationBlock__text,
   allocationBlock__subText,
   allocationBlock__subText_accent,
   allocationBlock__iconBlock,
   allocationBlock__iconBlockImg,
   allocationBlock__iconBlockInput,
   allocationBlock__iconBlockText,
   allocationBlock__button,
   allocationBlock__timer,
   allocationBlock__infoTitle,
   allocationBlock__infoText
} = statesClasses;

const { header, state, socials, links, info, news, story, banners } = window.initState?.project
   ? window.initState?.project
   : {
        header: {
           img: "https://icodrops.com/wp-content/uploads/2022/07/yycZmh7_400x400.png",
           title: "SEOR",
           showTitle: true,
           tag: "private"
        },
        state: {
         state: "upcoming",         // Состояние проекта (регистрация, обмен и т.д.)
         stage: 1,              // Этап состояния проекта (зарегистрирован и т.д.)
         endsIn: (new Date().getTime() / 1000) + (24 * 60 * 60)
        },
        socials: [
         { type: "web", href: "#" },
         { type: "twitter", href: "#" },
         { type: "telegram", href: "#" },
         { type: "facebook", href: "#" },
         { type: "instagram", href: "#" },
         { type: "discord", href: "#" }
        ],
        links: [
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
           claim: null,
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
              prompt: "Stage information"
           },
           {
              title: "REGISTRATION",
              active: true,
              points: [],
              prompt: "Stage information"
           },
           {
              title: "Swap",
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
              prompt: "Stage information"
           },
           {
              title: "FCFS",
              active: false,
              points: [
                  {
                     title: "End of FCFS -",
                     time: 1670929200,
                  }
              ],
              prompt: "Stage information"
           },
           {
              title: "Filled",
              active: false,
              points: [],
              prompt: "Stage information"
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
              prompt: "Stage information"
           },
        ],
        banners: [
         {
            img: "/public/img/project_slider_exemple.jpg",
            url: "#"
         },
         {
            img: "/public/img/project_slider_exemple.jpg",
            url: "#"
         },
         {
            img: "/public/img/project_slider_exemple.jpg",
            url: "#"
         }
        ]
     };

export default function ProjectPage(props) {
   const local = "ru-RU";

   const {setToolTip} = props;

   const getCurrency = (cur) => {
      switch (cur) {
         case "usd": {
            return "$";
         }
         case "eur": {
            return "€";
         }
         case "rub": {
            return "₽";
         }
         default:
            break;
      }
   };

   const [curretnSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      if (curretnSlide < 0) setCurrentSlide(banners.length - 1);
      if (curretnSlide >= banners.length) setCurrentSlide(0);
   }, [curretnSlide])

   const NotRegisterBlock = ({title = "", time = new Date().getTime() / 1000 + (24 * 60 * 60)}) => (
      <div className={notRegist}>
         <div className={notRegist__block}>
            <h3 className={notRegist__title}>{title}</h3>
            <Countdown className={notRegist__timer} timestamp={time * 1000} />
         </div>
         <div className={notRegist__block + " " + notRegist__block_card}>
            <p className={notRegist__blockText}>
               Dear investor!
            </p>
            <p className={notRegist__blockText}>
               You need <a href="/sign-in/" className={notRegist__link}>Login</a> or <a href="/sign-up/" className={notRegist__link}>Register</a> to get information about this project and be able to connect a wallet
            </p>
         </div>
      </div>
   );

   const connectWalletFunc = () => {
      props.setModal((props) => <ConnectWalletModal {...props} />);
   }

   const UpcomingBlock = ({}) => (
      <div className={upcomingBlock}>
         <div className={upcomingBlock__block}>
            <h3 className={upcomingBlock__title}>
               REQUIREMENTS
            </h3>

            <div className={upcomingBlock__checks}>
               <div className={upcomingBlock__check}>
                  <div className={upcomingBlock__checkIcon + " " + upcomingBlock__checkIcon_check}>
                     <CheckIcon />
                  </div>
                  <p className={upcomingBlock__checkText}>
                     Tyr is not required
                  </p>
               </div>
               <div className={upcomingBlock__check}>
                  <div className={upcomingBlock__checkIcon + " " + upcomingBlock__checkIcon_check}>
                     <CheckIcon />
                  </div>
                  <p className={upcomingBlock__checkText}>
                     KYC is not required
                  </p>
               </div>
               <div className={upcomingBlock__check}>
                  <div className={upcomingBlock__checkIcon}>
                     
                  </div>
                  <p className={upcomingBlock__checkText}>
                     Social activities
                  </p>
               </div>
            </div>
         </div>
         <div className={upcomingBlock__block}>
            <h3 className={upcomingBlock__title}>
               WHITELIST OPENING IN
            </h3>

            <Countdown className={upcomingBlock__timer} timestamp={state.endsIn * 1000} />

            <div className={upcomingBlock__buttons}>
               <Button className={upcomingBlock__button} onClick={connectWalletFunc}>Connect wallet</Button>
               <Button className={upcomingBlock__buttonOutline} variant={"outline"}>Apply</Button>
            </div>
         </div>
      </div>
   );

   const ConnectWalletBlock = ({title = "", endText = ""}) => (
      <div className={connectWalletBlock}>
         <div className={connectWalletBlock__block}>
            <h3 className={connectWalletBlock__title}>
               {title}
            </h3>

            <Button className={connectWalletBlock__button} onClick={connectWalletFunc}>Connect Wallet</Button>
         </div>
         
         <div className={connectWalletBlock__block}>
            <h3 className={connectWalletBlock__title}>
               {endText}
            </h3>

            <Countdown className={connectWalletBlock__timer} timestamp={state.endsIn * 1000} />
         </div>
      </div>
   );

   const AllocationBlock = ({title = "", endText =""}) => {

      const [currencyImg, setCurrencyImg] = useState("https://cdn.worldvectorlogo.com/logos/tether.svg");
      const [tokenImg, setTokenImg] = useState("https://icodrops.com/wp-content/uploads/2022/07/yycZmh7_400x400.png");

      const [paidIn, setPaidIn] = useState(0);
      const [receive, setReceive] = useState(0);
      
      const [amount, setAmount] = useState(2000);
      const [tokens, setTokens] = useState(66666.66);
      const [maxAmount, setMaxAmount] = useState(2000);
      const [tokenName, setTokenName] = useState("eywa");
      const [spnCost, setSpnCost] = useState(0.0024);
      const [balance, setBalance] = useState(0);

      return (
         <div className={allocationBlock}>
            <div className={allocationBlock__block + " " + allocationBlock__block_right}>
               <h3 className={allocationBlock__title}>
                  {title}
               </h3>

               <div className={allocationBlock__wrapper}>
                  <div className={allocationBlock__row}>
                     <p className={allocationBlock__subText}>
                        You paid in total
                     </p>
                     <p className={allocationBlock__subText}>
                        You will receive
                     </p>
                  </div>

                  <div className={allocationBlock__row}>
                     <div className={allocationBlock__iconBlock}>
                        <img src={currencyImg} className={allocationBlock__iconBlockImg} />

                        <input
                           type="number"
                           min="0"
                           className={allocationBlock__iconBlockInput}
                           onChange={e => setPaidIn(e.target.value)}
                           value={paidIn}
                        />
                     </div>
                     
                     <div className={allocationBlock__iconBlock}>
                        <img src={tokenImg} className={allocationBlock__iconBlockImg} />

                        <p className={allocationBlock__iconBlockText}>{receive.toLocaleString(local)}</p>
                     </div>
                  </div>
               </div>
               
               <div className={allocationBlock__wrapper}>
                  <div className={allocationBlock__row}>
                     <p className={allocationBlock__subText}>
                        Amount
                     </p>
                     <p className={allocationBlock__subText}>
                        tokens
                     </p>
                  </div>

                  <div className={allocationBlock__row}>
                     <div className={allocationBlock__iconBlock}>
                        <img src={currencyImg} className={allocationBlock__iconBlockImg} />

                        <p className={allocationBlock__iconBlockText}>{amount.toLocaleString(local)}</p>
                     </div>

                     <div className={allocationBlock__iconBlock}>
                        <img src={tokenImg} className={allocationBlock__iconBlockImg} />

                        <p className={allocationBlock__iconBlockText}>{tokens.toLocaleString(local)}</p>
                     </div>
                  </div>
                  
                  <div className={allocationBlock__row}>
                     <p className={allocationBlock__subText + " " + allocationBlock__subText_accent}>
                        Max {maxAmount.toLocaleString(local)}
                     </p>
                     <p className={allocationBlock__subText}>
                        1 {tokenName} = {spnCost} usdt
                     </p>
                  </div>
                  
                  <div className={allocationBlock__row}>
                     <p className={allocationBlock__subText}>
                        Balance:
                     </p>
                     <p className={allocationBlock__subText}>
                     </p>
                  </div>
                  
                  <div className={allocationBlock__row}>
                     <p className={allocationBlock__text}>
                        {balance} USDT
                     </p>
                     <p className={allocationBlock__text}>
                     </p>
                  </div>
               </div>

               <Button className={allocationBlock__button}>Approve</Button>
            </div>
            
            <div className={allocationBlock__block}>
               <h3 className={allocationBlock__title}>
                  {endText}
               </h3>

               <Countdown className={allocationBlock__timer} timestamp={state.endsIn * 1000} />

               <div className={allocationBlock__wrapper}>
                  <h3 className={allocationBlock__infoTitle}>Dear investor!</h3>
                  <p className={allocationBlock__infoText}>
                     Pay your attension that SPORTPZCHAIN token (SPN) deposit is availible on several blockchain networks: BNB Chain, Polygon.
                  </p>
                  <p className={allocationBlock__infoText}>
                     The distribution of SPORTPZCHAIN token will carried out in polygon ony!
                  </p>
               </div>
            </div>
         </div>
      );
   }

   return (
      <>
         <div className={project__layout}>
            <StoryBoard steps={story} setToolTip={setToolTip} />

            {
               state.state !== "claim" ? (
                  <div className={project__body}>
                     <Container className={project__container}>
                        <aside className={project__info}>
                           <div className={project__head}>
                              <img src={header.img} alt={header.title} />
                              {
                                 header.showTitle ? <h2 className={project__title}>{header.title}</h2> : ""
                              }
      
                              {header.tag ? <div className={project__tag}>{header.tag}</div> : ""}
                           </div>
                           <div className={project__socials}>
                              {
                                 socials.map(({type, href}, i) => (
                                    <a className={project__socialsLink} href={href} target="_blank" rel="noopener noreferrer">
                                       <SocialButton
                                          className={project__socialsLinkImg}
                                          type={type}
                                       />
                                    </a>
                                 ))
                              }
                           </div>
                           <ul className={project__links}>
                              {links.map(({ title, href }, key) => (
                                 <li key={key}>
                                    <Button variant={"grey"} href={href}>
                                       {title}
                                    </Button>
                                 </li>
                              ))}
                           </ul>
                           <hr />
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
                              {
                                 info.claim ? (
                                    <li>
                                       <span className={project__info__items__title}>Claim</span>
                                       <span className={project__info__items__result}>{info.claim}</span>
                                    </li>
                                 ) : ""
                              }
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
                           {
                              state.state === "upcoming" ? (
                                 state.stage === 0 ? <NotRegisterBlock title="WHITELIST OPENING IN" time = {state.endsIn} /> : <UpcomingBlock />
                              ) : ""
                           }
      
                           {
                              state.state === "registration" ? (
                                 state.stage === 0 ? <NotRegisterBlock title="Registration ends in" time = {state.endsIn} /> : (
                                    <div className={registrationCard}>
                                       <div className={registrationCard__block}>
                                          <h3 className={registrationCard__title}>Registration</h3>
                                          <div className={registrationCard__check}>
                                             <div className={registrationCard__checkItem}>
                                                <div className={registrationCard__checkCircle + " " + registrationCard__checkCircle_check}>
                                                   <CheckIcon className={registrationCard__checkIcon + " " + registrationCard__checkIcon_check} />
                                                </div>
                                                <p className={registrationCard__checkText}>
                                                   Tier
                                                </p>
                                             </div>
                                             <div className={registrationCard__checkItem}>
                                                <div className={registrationCard__checkCircle}>
                                                   <CrossIcon className={registrationCard__checkIcon} />
                                                </div>
                                                <p className={registrationCard__checkText}>
                                                   KYC
                                                </p>
                                             </div>
                                          </div>
                                          <Button disabled={true} type={"button"} className={registrationCard__button}>Registration</Button>
                                       </div>
                                       <div className={registrationCard__block}>
                                          <h3 className={registrationCard__title}>Registration ENDS IN</h3>
                                          <div className={card__timer}>
                                             <Countdown className={card__block} timestamp={state.endsIn * 1000} />
                                          </div>
                                       </div>
                                    </div>
                                 )
                              ) : ""
                           }
                           
                           {
                              state.state === "swap" ? (
                                 state.stage === 0 ? <NotRegisterBlock title="SWAP ends in" time = {state.endsIn} /> : (
                                    state.stage === 1 ? <ConnectWalletBlock title="Swap" endText="Swap ENDS IN" /> : 
                                    <AllocationBlock title="swap" endText="swap ENDS IN" />
                                 )
                              ) : ""
                           }
                           
                           {
                              state.state === "fcfs" ? (
                                 state.stage === 0 ? <NotRegisterBlock title="FCFS ends in" time = {state.endsIn} /> : (
                                    state.stage === 1 ? <ConnectWalletBlock title="REQUIREMENTS" endText="FCfs ENDS IN" /> : 
                                    <AllocationBlock title="FCFS" endText="FCFS ENDS IN" />
                                 )
                              ) : ""
                           }
                           
                           {
                              state.state === "filled" ? (
                                 state.stage === 0 ? <NotRegisterBlock title="Filled ends in" time = {state.endsIn} /> : (
                                    <>
                                    </>
                                 )
                              ) : ""
                           }
                           
                           {
                              state.state !== "upcoming" &&
                              state.state !== "registration" &&
                              state.state !== "swap" &&
                              state.state !== "fcfs" &&
                              state.state !== "filled" ? (
                                 <>
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
                                 </>
                              ) : ""
                           }
                        </Container>
                        <Container className={project__container + " " + project__container_left}>
                           <h3 className={card__title}>PROJECT DESCREPTION</h3>
                           <TabControl array={news} />
                        </Container>
      
                        {
                           banners?.length > 0 ? (
                              <div className={slider}>
                                 <div className={slider__header}>
                                    <p className={slider__title}>
                                       ABOUT {header.title}
                                    </p>
            
                                    <div className={slider__control}>
                                       <button className={slider__button} type="button" onClick={() => setCurrentSlide(curretnSlide - 1)}>
                                          <SliderArrowIcon />
                                       </button>
            
                                       <p className={slider__counter}>
                                          {curretnSlide + 1} / {banners.length}
                                       </p>
                                       
                                       <button className={slider__button} type="button" onClick={() => setCurrentSlide(curretnSlide + 1)}>
                                          <SliderArrowIcon style={{transform: "rotate(180deg)"}} />
                                       </button>
                                    </div>
                                 </div>
            
                                 <div className={slider__track}>
                                    {
                                       banners.map((banner, i) => (
                                          <div className={slider_slide} style={{transform: "translateX("+(curretnSlide * -100)+"%)"}}>
                                             <img src={banner.img} alt="" className={slider__img} />
            
                                             {
                                                banner.url ? <a href={banner.url} className={slider_link} target="_blank" rel="noopener noreferrer"> </a> : ""
                                             }
                                          </div>
                                       ))
                                    }
                                 </div>
                              </div>
                           ) : ""
                        }
                     </div>
                  </div>
               )
               : <ProjectClaimBlock />
            }
         </div>
      </>
   );
}
