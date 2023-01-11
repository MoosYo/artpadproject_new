import classes from "./styles.module.scss";
import lang from "./local.json";

import { useState } from "react";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import ApplyForIDOModal from "../../components/ApplyForIDOModal";

// Icons
import DollarIcon from "../../components/Icons/Dollar";
import FlameIcon from "../../components/Icons/Flame";
import RaisedIcon from "../../components/Icons/Raised";
import CashIcon from "../../components/Icons/Cash";
import ArrowRingIcon from "../../components/Icons/ArrowRing";
import RoundedCheckIcon from "../../components/Icons/RoundedCheck";

// Helpers
import getLocale from "../../helpers/getLoacale";

const {
    hideOnDesc,
    hideOnMob,

    topBlock,
    topBlock__left,
    topBlock__right,
    topBlock__title,
    topBlock__description,

    topBlock__cards,
    topBlock__card,
    topBlock__cardTitle,
    topBlock__cardTitleIcon,
    topBlock__cardTitleText,
    topBlock__cardText,

    topBlock__communtity,
    topBlock__communityText,
    topBlock__communityButton,

    topBlock__actionButton,
    topBlock__actionButtonContent,
    topBlock__actionButtonText,
    topBlock__actionButtonIcon,

    platforms,
    platforms__title,
    platforms__list,
    platforms__item,
    platforms__logo,
    platforms__name,
    platforms__graph,
    platforms__text,
    platforms__subText,

    roadMap,
    roadMap__title,
    roadMap__timeLine,
    roadMap__block,
    roadMap__list,
    roadMap__progress,
    roadMap__progrssBar,
    roadMap__progrssBar_active,
    roadMap__progressText,
    roadMap__item,
    roadMap__itemCheck,
    roadMap__itemCheckEmpty,
    roadMap__itemText,
    roadMap__itemText_done,

    subscribeForm,
    subscribeForm__title,
    subscribeForm__form,
    subscribeForm__input,
    subscribeForm__button,
    subscribeForm__result
} = classes;

const locale = getLocale();

const initState = window.initState ? window.initState : {
    topBlockCardsData: [
        {
            title: "0.6432",
            text: lang.topBlockPrice[locale]
        },
        {
            title: "$56.88m",
            text: lang.topBlockMCap[locale]
        },
        {
            title: "$44.7m",
            text: lang.topBlockTVL[locale]
        },
        {
            title: "$16.28m",
            text: lang.topBlockRaised[locale]
        }
    ],
    platformsArray: [
        "Ethereum",
        "Solana",
        "Polygon",
        "Binance"
    ],
    roadMapArray: [
        {
            text: "Q1 2022",
            total: 5,
            completed: 3,
            top: [
                {
                    done: true,
                    text: "IDO Platform Launch"
                },
                {
                    done: true,
                    text: "Airdrop Lottery"
                },
                {
                    done: true,
                    text: "KYC and Tiers System"
                },
                {
                    done: false,
                    text: "Stacking Pools on Platform"
                },
                {
                    done: false,
                    text: "Placement of the first project IDO"
                }
            ],
            bottom: []
        },
        {
            text: "Q2 2022",
            total: 3,
            completed: 0,
            top: [],
            bottom: [
                {
                    done: false,
                    text: "NFT Marketplace"
                },
                {
                    done: false,
                    text: "Seed and Private round"
                },
                {
                    done: false,
                    text: "Formation of pools by Investors in the personal account, whixh will allow participants to enter more expensive Tiers, by joint efforts"
                }
            ]
        },
        {
            text: "Q3 2022",
            total: 2,
            completed: 0,
            top: [
                {
                    done: false,
                    text: "Dex Exchange"
                },
                {
                    done: false,
                    text: "Smart Contract"
                }
            ],
            bottom: []
        },
        {
            text: "Q4 2022",
            total: 1,
            completed: 0,
            top: [],
            bottom: [
                {
                    done: false,
                    text: "Placement of the first project on LaunchPad developed on ArteryChain"
                }
            ]
        }
    ]
}

const MainPage = ({setModal = () => {}}) => {

    const {topBlockCardsData} = initState;

    const topBlockCardsIcons = [
        DollarIcon,
        CashIcon,
        FlameIcon,
        RaisedIcon
    ];

    const {platformsArray} = initState;

    const {roadMapArray} = initState;

    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState(null);

    const sendEmailForSubscribe = async () => {
        const body = new FormData();
        body.append("email", email);

        const resp = await (await fetch("/public/sendform.php?form=1", {
            method: "POST",
            body
        })).text();

        setEmailStatus(resp);
    }

    const showCards = (className = "") => (
        <div className={topBlock__cards + " " + className}>
            {
                topBlockCardsData.map((elem, i) => (
                    <div className={topBlock__card} key={i}>
                        <div className={topBlock__cardTitle}>
                            {
                                topBlockCardsIcons[i]({className: topBlock__cardTitleIcon})
                            }
                            <p className={topBlock__cardTitleText}>
                                {
                                    elem.title
                                }
                            </p>
                        </div>

                        <p className={topBlock__cardText}>
                            {
                                elem.text
                            }
                        </p>
                    </div>
                ))
            }
        </div>
    )

    const showCommunityBlock = (className = "") => (
        <>
            <div className={topBlock__communtity + " " + className}>
                <p className={topBlock__communityText}>
                    {lang.topBlockCommunity[locale]}:
                </p>
                <Button
                    variant={"outline"}
                    className={topBlock__communityButton}
                    href="#"
                >
                    Telegram
                </Button>
            </div>

            <button
                type="button"
                className={topBlock__actionButton + " " + className}
                onClick={() => setModal(ApplyForIDOModal)}
            >
                <div className={topBlock__actionButtonContent}>
                    <p className={topBlock__actionButtonText}>
                        {lang.topBlockApply[locale]}
                    </p>
                    <ArrowRingIcon className={topBlock__actionButtonIcon} />
                </div>
            </button>
        </>
    )

    return (
        <>
            <section className={topBlock}>
                <div className={topBlock__left}>
                    <h2 className={topBlock__title}>
                        {lang.topBlockTitle[locale]}
                    </h2>
                    <p className={topBlock__description}>
                        {lang.topBlockDescription[locale]}
                    </p>
                    {
                        showCards(hideOnMob)
                    }
                    {
                        showCommunityBlock(hideOnDesc)
                    }
                </div>
                <div className={topBlock__right}>
                    {
                        showCards(hideOnDesc)
                    }
                    {
                        showCommunityBlock(hideOnMob)
                    }
                </div>
            </section>

            <section className={platforms}>
                <h2 className={platforms__title}>{lang.platformsTitle[locale]}</h2>
                <div className={platforms__list}>
                    {
                        platformsArray.map((platform, i) => (
                            <div className={platforms__item} key={i}>
                                <img src={"/public/img/mainPage/platforms/" + platform.toLowerCase() + ".svg"} alt="" className={platforms__logo} />
                                <p className={platforms__name}>{platform}</p>
                                <img src={"/public/img/mainPage/platforms/graph" + (i + 1) + ".svg"} alt="" className={platforms__graph} />
                            </div>
                        ))
                    }
                </div>

                <p className={platforms__text}>
                    {lang.platformsText[locale]}
                </p>
                <p className={platforms__subText}>
                    {lang.platformsSubText[locale]}
                </p>
            </section>

            <section className={roadMap}>
                <h2 className={roadMap__title}>
                    {lang.roadmapTitle[locale]}
                </h2>

                <div className={roadMap__timeLine}>
                    {
                        roadMapArray.map((block, i) => (
                            <div className={roadMap__block}>
                                <div className={roadMap__list} style={{justifyContent: "flex-end"}}>
                                    {
                                        block.top.map((blockList, j) => (
                                            <div className={roadMap__item} key={j}>
                                                {
                                                    blockList.done ?
                                                        <RoundedCheckIcon className={roadMap__itemCheck} /> :
                                                        <div className={roadMap__itemCheckEmpty} />
                                                }
                                                <p className={roadMap__itemText + (blockList.done ? " " + roadMap__itemText_done : "")}>
                                                    {blockList.text}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={roadMap__progress}>
                                    <div className={roadMap__progrssBar + (block.completed > 0 ? " " + roadMap__progrssBar_active : "")} style={{width: block.completed / block.total * 100 + "%"}} />
                                    <p className={roadMap__progressText}>{block.text}</p>
                                </div>
                                <div className={roadMap__list} style={{justifyContent: "flex-start"}}>
                                    {
                                        block.bottom.map((blockList, j) => (
                                            <div className={roadMap__item} key={j}>
                                                {
                                                    blockList.done ?
                                                        <RoundedCheckIcon className={roadMap__itemCheck} /> :
                                                        <div className={roadMap__itemCheckEmpty} />
                                                }
                                                <p className={roadMap__itemText + (blockList.done ? " " + roadMap__itemText_done : "")}>
                                                    {blockList.text}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className={subscribeForm}>
                    <h2 className={subscribeForm__title}>
                        {lang.subscribeTitle[locale]}
                    </h2>
                    <div className={subscribeForm__form}>
                        {
                            !emailStatus ? (
                                <>
                                    <Input
                                        className={subscribeForm__input}
                                        variant="outline"
                                        placeholder={lang.subscribePlaceholder[locale]}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Button
                                        className={subscribeForm__button}
                                        type="button"
                                        onClick={sendEmailForSubscribe}
                                    >
                                        {lang.subscribeButton[locale]}
                                    </Button>
                                </>
                            ) : (
                                <p className={subscribeForm__result}>
                                    {emailStatus}
                                </p>
                            )
                        }
                    </div>
            </section>
        </>
    );
}

export default MainPage;