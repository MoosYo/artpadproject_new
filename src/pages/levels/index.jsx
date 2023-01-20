import classes from "./styles.module.scss";
import lang from "./local.json";

import InfoIcon from "../../components/Icons/info";
import Table from "../../components/Table";
import getLocale from "../../helpers/getLoacale";


const {
    levels,
    levels__top,
    levels__block,
    levels__blockTitle,
    levels__blockTitleText,
    levels__blockTitleToolTip,
    levels__blockText,
    levels__blockText_accent,
    levels__header,
    levels__table,

    levels__toolTipText
} = classes;


const {
    numbersOfSteakers,
    totalARTR,
    apy
} = window.initState?.levels ? window.initState.levels : {
    numbersOfSteakers: 1959,
    totalARTR: 166757348,
    apy: 133.09
}

const LevelsPage = ({setModals = () => {}, setToolTip = () => {}}) => {

    const locale = getLocale();

    const table1Rows = [
        {
            cells: [
                {
                    value: "1",
                    type: "text"
                },
                {
                    value: "2500 ARTR",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                },
                {
                    value: lang.lottery[locale] + " (25%)",
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "2",
                    type: "text"
                },
                {
                    value: "5000 ARTR",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                },
                {
                    value: lang.lottery[locale] + " (50%)",
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "3",
                    type: "text"
                },
                {
                    value: "7000 ARTR",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                },
                {
                    value: lang.lottery[locale] + " (75%)",
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "4",
                    type: "text"
                },
                {
                    value: "10 000 ARTR",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                },
                {
                    value: lang.guaranteed[locale],
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "5",
                    type: "text"
                },
                {
                    value: "25 000 ARTR",
                    type: "text"
                },
                {
                    value: "X2.5",
                    type: "text"
                },
                {
                    value: lang.guaranteed[locale],
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "6",
                    type: "text"
                },
                {
                    value: "50 000 ARTR",
                    type: "text"
                },
                {
                    value: "X5",
                    type: "text"
                },
                {
                    value: lang.guaranteed[locale],
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "7",
                    type: "text"
                },
                {
                    value: "100 000 ARTR",
                    type: "text"
                },
                {
                    value: "X11",
                    type: "text"
                },
                {
                    value: lang.guaranteed[locale],
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "8",
                    type: "text"
                },
                {
                    value: "250 000 ARTR",
                    type: "text"
                },
                {
                    value: "X28",
                    type: "text"
                },
                {
                    value: lang.guaranteed[locale],
                    type: "text"
                },
            ]
        },
        {
            cells: [
                {
                    value: "9",
                    type: "text"
                },
                {
                    value: "500 000 ARTR",
                    type: "text"
                },
                {
                    value: "X36",
                    type: "text"
                },
                {
                    value: lang.guaranteed[locale],
                    type: "text"
                },
            ]
        },
    ];

    const table2Rows = [
        {
            cells: [
                {
                    value: lang["1m"][locale],
                    type: "text"
                },
                {
                    value: "2500 ARTR",
                    type: "text"
                },
                {
                    value: "0%",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                }
            ]
        },
        {
            cells: [
                {
                    value: lang["4m"][locale],
                    type: "text"
                },
                {
                    value: "5000 ARTR",
                    type: "text"
                },
                {
                    value: "12%",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                }
            ]
        },
        {
            cells: [
                {
                    value: lang["6m"][locale],
                    type: "text"
                },
                {
                    value: "7000 ARTR",
                    type: "text"
                },
                {
                    value: "18%",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                }
            ]
        },
        {
            cells: [
                {
                    value: lang["12m"][locale],
                    type: "text"
                },
                {
                    value: "10 000 ARTR",
                    type: "text"
                },
                {
                    value: "24%",
                    type: "text"
                },
                {
                    value: "X1",
                    type: "text"
                }
            ]
        }
    ]

    const toolTip = (e, i) => {

        const rect = e.target.getClientRects()[0];
        const content = [
            (props) => (
                <>
                    <p className={levels__toolTipText} style={{color: "#ffffff"}} {...props}>
                        APY info
                    </p>
                </>
            ),
            (props) => (
                <>
                    <p className={levels__toolTipText} style={{color: "#ffffff"}} {...props}>
                        Column info
                    </p>
                </>
            )
        ];
        
        setToolTip({
            content: content[i],
            x: rect.x + (rect.x < window.innerWidth / 2 ? 0 : rect.height),
            y: window.scrollY + rect.y + rect.height
        });
    }

    return (
        <div className={levels}>
            <div className={levels__top}>
                <div className={levels__block}>
                    <div className={levels__blockTitle}>
                        <h2 className={levels__blockTitleText}>
                            {lang.numOfSteak[locale]}:
                        </h2>
                    </div>

                    <p className={levels__blockText + " " + levels__blockText_accent}>
                        {numbersOfSteakers.toLocaleString(locale)}
                    </p>
                </div>
                
                <div className={levels__block}>
                    <div className={levels__blockTitle}>
                        <h2 className={levels__blockTitleText}>
                            {lang.totalArtr[locale]}:
                        </h2>
                    </div>

                    <p className={levels__blockText + " " + levels__blockText_accent}>
                        {totalARTR.toLocaleString(locale)}
                    </p>
                </div>
                
                <div className={levels__block}>
                    <div className={levels__blockTitle}>
                        <h2 className={levels__blockTitleText}>
                            {lang.apy[locale]}:
                        </h2>
                        <InfoIcon
                            className={levels__blockTitleToolTip}
                            onClick={(e) => toolTip(e, 0)}
                        />
                    </div>

                    <p className={levels__blockText + " " + levels__blockText_accent}>
                        {apy.toLocaleString(locale)} %
                    </p>
                </div>
            </div>

            <h2 className={levels__header}>
                {lang.artrLvl[locale]}
            </h2>

            <div className={levels__block}>
                <p className={levels__blockText}>
                    {lang.dearInv[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.payUrAtt[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.theDistribut[locale]}
                </p>
            </div>

            <Table
                className={levels__table}
                headers={[
                    {
                        name: lang.tier[locale],
                        toolTip: null,
                        width: "1fr"
                    },
                    {
                        name: lang.staking[locale],
                        toolTip: (e) => toolTip(e, 1),
                        width: "1fr"
                    },
                    {
                        name: lang.multiplier[locale],
                        toolTip: (e) => toolTip(e, 1),
                        width: "1fr"
                    },
                    {
                        name: lang.allocation[locale],
                        toolTip: (e) => toolTip(e, 1),
                        width: "1fr"
                    }
                ]}
                rows={table1Rows}
            />

            <h2 className={levels__header}>
                {lang.stakingCond[locale]}
            </h2>

            <div className={levels__block}>
                <p className={levels__blockText}>
                    {lang.dearInv[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.payUrAtt[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.theDistribut[locale]}
                </p>
            </div>

            <Table
                className={levels__table}
                style={{marginBottom: "48px"}}
                headers={[
                    {
                        name: lang.stakingPer[locale],
                        width: "1fr",
                        toolTip: null
                    },
                    {
                        name: lang.staking[locale],
                        width: "1fr",
                        toolTip: null
                    },
                    {
                        name: lang.apy[locale],
                        width: "1fr",
                        toolTip: (e) => toolTip(e, 1)
                    },
                    {
                        name: lang.multiplier[locale],
                        width: "1fr",
                        toolTip: (e) => toolTip(e, 1)
                    }
                ]}
                rows={table2Rows}
            />

            <div className={levels__block} style={{marginBottom: "90px"}}>
                <p className={levels__blockText}>
                    {lang.dearInv[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.payUrAtt[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.theDistribut[locale]}
                </p>
            </div>

            

            <h2 className={levels__header}>
                {lang.reward[locale]}
            </h2>

            <div className={levels__block}>
                <p className={levels__blockText}>
                    {lang.dearInv[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.payUrAtt[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.theDistribut[locale]}
                </p>
            </div>

            <Table
                className={levels__table}
                headers={[
                    {
                        name: lang["1m"][locale],
                        toolTip: null,
                        width: "1fr"
                    },
                    {
                        name: lang["4m"][locale],
                        toolTip: null,
                        width: "1fr"
                    },
                    {
                        name: lang["6m"][locale],
                        toolTip: null,
                        width: "1fr"
                    },
                    {
                        name: lang["12m"][locale],
                        toolTip: null,
                        width: "1fr"
                    }
                ]}
                rows={[
                    {
                        cells: [
                            {
                                value: "0%",
                                type: "text"
                            },
                            {
                                value: "12%",
                                type: "text"
                            },
                            {
                                value: "18%",
                                type: "text"
                            },
                            {
                                value: "24%",
                                type: "text"
                            }
                        ]
                    }
                ]}
            />

            <div className={levels__block}>
                <p className={levels__blockText}>
                    {lang.dearInv[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.payUrAtt[locale]}
                </p>
                <p className={levels__blockText}>
                    {lang.theDistribut[locale]}
                </p>
            </div>

        </div>
    );
}

export default LevelsPage;