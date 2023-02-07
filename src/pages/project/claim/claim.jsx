import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import classes from "./styles.module.scss";

const {
    claimBlock,
    claimBlock__switch,

    claimBlock__table,
    claimBlock__claimAll,
    claimBlock__claimAllButton,
    claimBlock__bottom,
    claimBlock__pagination,
    claimBlock__amount,
} = classes;

const { header, claim } = window.initState?.project
   ? window.initState?.project
   : {
        header: {
            title: "SEOR"
        },
        claim: {
            needToSwitch: true,
            items: [
                {
                    id: 0,
                    date: new Date().getTime() - Math.random() * (7 * 24 * 60 * 60 * 1000),
                    percent: 20,
                    amount: 642.76,
                    unit: "synr",
                    claim: null
                },
                {
                    id: 1,
                    date: new Date().getTime() - Math.random() * (7 * 24 * 60 * 60 * 1000),
                    percent: 30,
                    amount: 642.76,
                    unit: "synr",
                    claim: false
                },
                {
                    id: 2,
                    date: new Date().getTime() - Math.random() * (7 * 24 * 60 * 60 * 1000),
                    percent: 40,
                    amount: 642.76,
                    unit: "synr",
                    claim: true
                }
            ],
            count: 1,
            currentAmount: 0,
            totalAmount: 0,
            amountUnit: "sidus",
            pages: {
                current: 1,
                count: 5
            }
        }
   };

const ProjectClaimBlock = ({}) => {

    const [data, setData] = useState([]);

    const [claimAbleCount, setClaimAbleCount] = useState(claim.count);

    const dataToRows = (data) => {
        if (data.length > 0) {

            const tmpData = [];

            data.forEach ((item) => {
                const date = new Date(item.date);

                const mnths = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

                tmpData.push(
                    {
                        cells: [
                            {
                                value: date.getDate() + " " +
                                       mnths[date.getMonth()] + " " +
                                       date.getFullYear() + ", " +
                                       date.toLocaleTimeString("en-US"),
                                type: "text"
                            },
                            {
                                value: item.percent + "%",
                                type: "text"
                            },
                            {
                                value: item.amount + " " + item.unit.toUpperCase(),
                                type: "text"
                            },
                            {
                                value: item.claim === null ? "Not claimable" : (
                                    item.claim ? item.amount + " " + item.unit.toUpperCase() : "Claim"
                                ),
                                link: header.title + "/claim/" + item.id,
                                func: (e) => {
                                    e.preventDefault();
                                    console.log("Claim " + item.amount + " " + item.unit.toUpperCase());
                                },
                                type: item.claim === null ? "disabled" : (
                                    item.claim ? "checked" : "url"
                                )
                            }
                        ],
                        child: []
                    }
                );
            });

            setData(tmpData);
        }
    };

    useEffect(() => {
        dataToRows(claim.items);
    }, []);

    const claimAll = () => {
        if (claimAbleCount > 0) {
            console.log("Claim all");
        }
    }

    return (
        <div className={claimBlock} style={{color: "white"}}>
            {
                claim.needToSwitch ? (
                    <div className={claimBlock__switch}>
                        Switch you’r wallet to ETH chain.
                    </div>
                )
                : (
                    <div className={claimBlock__table}>
                        <Table
                            headers={[
                                {
                                    name: "Date",
                                    toolTip: null,
                                    width: "1fr"
                                },
                                {
                                    name: "Percent",
                                    toolTip: null,
                                    width: "1fr"
                                },
                                {
                                    name: "Amount",
                                    toolTip: null,
                                    width: "1fr"
                                },
                                {
                                    name: "",
                                    toolTip: null,
                                    width: "1fr"
                                }
                            ]}
                            rows={data}
                        />

                        <div className={claimBlock__claimAll}>
                            <Button
                                variant={"outline"}
                                className={claimBlock__claimAllButton}
                                disabled={claimAbleCount === -1}
                                onClick={claimAll}
                            >
                                Claim all {claimAbleCount >= 0 ? "(" + claimAbleCount + ")" : ""}
                            </Button>
                        </div>

                        <div className={claimBlock__bottom}>
                            <Pagination
                                curentPage={claim.pages.current}
                                totalPages={claim.pages.count}
                                href={header.title}
                                className={claimBlock__pagination}
                            />

                            <p className={claimBlock__amount}>
                                Total: {claim.currentAmount} {claim.amountUnit} / {claim.totalAmount} {claim.amountUnit}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ProjectClaimBlock;