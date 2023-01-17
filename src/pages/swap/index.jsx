import classes from "./styles.module.scss";
import lang from "./local.json";

// Libs
import { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
  } from 'chart.js';
import { Line } from "react-chartjs-2";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";

// Icons
import SwapIcon from "../../components/Icons/Swap";

// Helpers
import getLocale from "../../helpers/getLoacale";
import { useEffect } from "react";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const {
    swap,

    swap__form,
    swap__header,
    swap__description,
    swap__formDivider,
    swap__field,
    swap__fieldData,
    swap__fieldLogo,
    swap__fieldLabel,
    swap__fieldChange,
    swap__fieldChangeIcon,
    swap__fieldInput,
    swap__formText,
    swap__formIndex,
    swap__formSubmit,

    swap__data,
    swap_dataHeader,
    swap__dataCurrency,
    swap__dataCurrencyLogo,
    swap__dataCurrencyText,
    swap__dataCurrencyChange,
    swap__dataCurrencyChangeIcon,
    swap__dataDuration,
    swap__dataDurationButton,
    swap__dataDurationButton_active,
    swap__dataGraph
} = classes;

const {
    currency,
    slippage
} = window.initState?.swap ? window.initState.swap : {
    currency: [
        {
            "name": "ARTR",
            "logo": "https://artpad.kadys.webtm.ru/images/artery.png",
            "usdt": 0.5
        },
        {
            "name": "wARTR",
            "logo": "https://artpad.kadys.webtm.ru/public/img/svg/binance.svg",
            "usdt": 0.25
        }
    ],
    slippage: 0.5
};

const Swap = ({}) => {

    const locale = getLocale();

    const [currencyOrder, setCurrencyOrder] = useState([0,1]);

    const changeCurrency = () => {
        const tmp = [currencyOrder[1], currencyOrder[0]];
        setCurrencyOrder(tmp);
    };

    const [fcVal, setFCVal] = useState(1);
    const [scVal, setSCVal] = useState(1 * currency[0].usdt / currency[1].usdt);

    const changeVal = (val, i) => {
        let tmp = val;

        if (tmp !== "") {
            if (!/^[0-9]{1,}[.]{0,1}[0-9]{0,}$/.test(val)) return false;
        }
        else tmp = 0;

        if (/^[0]{1,}[0-9]{1,}$/.test(tmp)) tmp = parseFloat(tmp);

        const tmpVal = parseFloat(tmp);
        
        if (i === 0) {
            setFCVal(tmp);
            setSCVal(tmpVal * currency[0].usdt / currency[1].usdt);
        }
        else {
            setSCVal(tmp);
            setFCVal(tmpVal * currency[1].usdt / currency[0].usdt);
        }
    }

    const [duration, setDuration] = useState("h");

    
    const options = {
        responsive: true,
        scales: {
            y: {
                grid: {
                    color: "#ACACAC"
                },
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: "rgba(255,255,255,1)",
                titleColor: "#000",
                bodyColor: "#000"
            }
        }
    };
    
    const labels = {
        h: [],
        d: [],
        w: [],
        m: []
    };

    const currentTime = new Date().getTime();
    for(let i = 0; i < 12; i++) {
        const tmpTime = new Date(currentTime - (i * 5 * 60 * 1000));
        labels.h.unshift(("0" + tmpTime.getHours()).slice(-2) + ":" + ("0" + tmpTime.getMinutes()).slice(-2));
    }
    for(let i = 0; i < 24; i++) {
        const tmpTime = new Date(currentTime - (i * 60 * 60 * 1000));
        labels.d.unshift(("0" + tmpTime.getHours()).slice(-2) + ":00");
    }
    for(let i = 0; i < 7; i++) {
        const tmpTime = new Date(currentTime - (i * 24 * 60 * 60 * 1000));
        labels.w.unshift(("0" + tmpTime.getDate()).slice(-2) + "." + ("0" + tmpTime.getMonth()).slice(-2));
    }
    for(let i = 0; i < 30; i++) {
        const tmpTime = new Date(currentTime - (i * 24 * 60 * 60 * 1000));
        labels.m.unshift(("0" + tmpTime.getDate()).slice(-2) + "." + ("0" + tmpTime.getMonth()).slice(-2));
    }

    const data = {
        labels: labels[duration],
        datasets: [
            {
                label: "USDT",
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 410);
                    gradient.addColorStop(0, "rgba(205, 62, 208, 1)");
                    gradient.addColorStop(1, "rgba(205, 62, 208, 0)");
                    return gradient;
                },
                fill: true,
                data: labels[duration].map(() => Math.random() * 100),
                borderColor: 'rgb(205, 62, 208)'
            }
        ]
    };

    useEffect(() => {
        data.datasets[0].data = labels[duration].map(() => Math.random() * 100);
    }, [duration]);

    return (
        <div className={swap}>
            <form className={swap__form} action="" method="POST">
                <h2 className={swap__header}>
                    {lang.swap[locale]}
                </h2>
                <p className={swap__description}>
                    {lang.tradeToken[locale]}
                </p>
                <hr className={swap__formDivider} />

                <div className={swap__field}>
                    <div className={swap__fieldData}>
                        <img className={swap__fieldLogo} src={currency[currencyOrder[0]].logo} alt="" />
                        <p className={swap__fieldLabel}>
                            {currency[currencyOrder[0]].name}
                        </p>
                    </div>
                    <Input
                        className={swap__fieldInput}
                        variant="outline"
                        value={currencyOrder[0] === 0 ? fcVal : scVal}
                        onChange={e => changeVal(e.target.value, currencyOrder[0] === 0 ? 0 : 1)}
                    />
                </div>

                <div className={swap__field}>
                    <div className={swap__fieldData}>
                        <img className={swap__fieldLogo} src={currency[currencyOrder[1]].logo} alt="" />
                        <p className={swap__fieldLabel}>
                            {currency[currencyOrder[1]].name}
                        </p>
                        <button type="button" className={swap__fieldChange} onClick={changeCurrency}>
                            <SwapIcon className={swap__fieldChangeIcon} />
                        </button>
                    </div>
                    <Input
                        className={swap__fieldInput}
                        variant="outline"
                        value={currencyOrder[0] === 0 ? scVal : fcVal}
                        onChange={e => changeVal(e.target.value, currencyOrder[0] === 0 ? 1 : 0)}
                    />
                </div>

                <p className={swap__formText}>
                    {lang.slippage[locale]}
                </p>

                <p className={swap__formIndex}>
                    {slippage}%
                </p>

                <Button className={swap__formSubmit} type={"submit"}>
                    {lang.swap[locale]}
                </Button>
            </form>
            
            <div className={swap__data}>
                <div className={swap_dataHeader}>
                    <div className={swap__dataCurrency}>
                        <img className={swap__dataCurrencyLogo} src={currency[currencyOrder[0]].logo} alt="" />
                        <img className={swap__dataCurrencyLogo} src={currency[currencyOrder[1]].logo} alt="" />
                        <p className={swap__dataCurrencyText}>
                            {
                                currency[currencyOrder[0]].name + "/" +
                                currency[currencyOrder[1]].name
                            }
                        </p>
                        <button
                            className={swap__dataCurrencyChange}
                            onClick={changeCurrency}
                            type={"button"}
                        >
                            <SwapIcon className={swap__dataCurrencyChangeIcon} />
                        </button>
                    </div>

                    <div className={swap__dataDuration}>
                        <button
                            className={swap__dataDurationButton + (duration === "h" ? " " + swap__dataDurationButton_active : "")}
                            type="button"
                            onClick={() => setDuration("h")}
                        >
                            1{lang.h[locale]}
                        </button>
                        <button
                            className={swap__dataDurationButton + (duration === "d" ? " " + swap__dataDurationButton_active : "")}
                            type="button"
                            onClick={() => setDuration("d")}
                        >
                            1{lang.d[locale]}
                        </button>
                        <button
                            className={swap__dataDurationButton + (duration === "w" ? " " + swap__dataDurationButton_active : "")}
                            type="button"
                            onClick={() => setDuration("w")}
                        >
                            1{lang.w[locale]}
                        </button>
                        <button
                            className={swap__dataDurationButton + (duration === "m" ? " " + swap__dataDurationButton_active : "")}
                            type="button"
                            onClick={() => setDuration("m")}
                        >
                            1{lang.m[locale]}
                        </button>
                    </div>
                </div>

                <div className={swap__dataGraph}>
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default Swap;