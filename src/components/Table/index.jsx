import { useEffect } from "react";
import { useState } from "react";
import getLocale from "../../helpers/getLoacale";
import Button from "../Button";
import Arrow from "../Icons/arrow";
import InfoIcon from "../Icons/info";

import classes from "./styles.module.scss";

const {
    table,
    table__header,
    table__headerCell,
    table__headerText,
    table__headerToolTip,
    table__rows,
    table__row,
    table__row_sub,
    table__rowWrapper,
    table__rowWrapper_sub,
    table__cell,
    table__cell_sub,
    table__cellImg,
    table__cellLink,
    table__cellButton
} = classes;

const Table = ({headers = [], rows = [], className = "", style = {}, hasChild = false}) => {

    const locale = getLocale();

    let columnsWidth = "";
   
    headers.forEach((header, i) => {
        const isPx = header.width.indexOf("px") > 0;
        const tmpWidth = isPx ? parseInt(header.width) : 120

        
        // const fixedWidth = window.innerWidth > 920 ? (
        //     window.innerWidth > 1600 ? tmpWidth : window.innerWidth / 1600 * tmpWidth
        // ) : window.innerWidth / 360 * tmpWidth;

        // columnsWidth += (isPx ? fixedWidth + "px" : header.width) + " ";

        columnsWidth += header.width + " ";
    });

    if (hasChild) columnsWidth += "100px";

    const [openedChilds, setOpenedChilds] = useState({});

    if (columnsWidth === "") columnsWidth = null;

    const changeChildState = (i) => {
        const tmp = JSON.parse(JSON.stringify(openedChilds));
        tmp[i] = tmp[i] === true ? false : true;
        setOpenedChilds(tmp);
    }

    return (
        <div
            className={table + (className ? " " + className : "")}
            style={style}
        >
            <div className={table__header} style={{gridTemplateColumns: columnsWidth}}>
                {
                    headers.map(({name, toolTip, width}, i) => (
                        <div className={table__headerCell} key={i} style={{minWidth: width.indexOf("px") > 0 ? width : "120px"}}>
                            <p className={table__headerText}>
                                {name}
                            </p>
                            {
                              toolTip ? (
                                 <InfoIcon className={table__headerToolTip} onClick={toolTip} />
                              ) : ""
                            }
                        </div>
                    ))
                }
            </div>

            <div className={table__rows}>
                {
                    rows.map(({cells, child}, i) => (
                        <div className={table__row} key={i}>
                            <div className={table__rowWrapper} style={{gridTemplateColumns: columnsWidth}}>
                                {
                                    cells.map(({value, type, func}, j) => {
                                        
                                        let formatedValue = value;

                                        if (type === "number") formatedValue = parseFloat(formatedValue).toLocaleString(locale);

                                        if (type === "img") formatedValue = (() => <img src={value} alt="" className={table__cellImg} />)();
                                        
                                        if (type === "url") formatedValue = (() => <a href={value} className={table__cellLink} >Click</a>)();
                                        
                                        if (type === "button") formatedValue = (() => <Button className={table__cellButton} onClick={func ? func : null} >{value}</Button>)();

                                        return (
                                            <div className={table__cell} key={j} style={{minWidth: headers[j].width.indexOf("px") > 0 ? headers[j].width : "120px"}}>
                                                {formatedValue}
                                            </div>
                                        );
                                    })
                                }
                                {
                                    hasChild ? (
                                        <div
                                            className={table__cell + " " + table__cell_sub}
                                            onClick={()=>changeChildState(i)}
                                        >
                                            {
                                                child.length > 0 ? (
                                                    <>
                                                        {
                                                            !openedChilds[i] ? (
                                                                locale === "en-US" ? "Open" : "Открыть"
                                                            ) : (
                                                                locale === "en-US" ? "Close" : "Скрыть"
                                                            )
                                                        }
                                                        <Arrow />
                                                    </>
                                                ) : ""
                                            }
                                        </div>
                                    ) : ""
                                }
                            </div>
                            {
                                child.length > 0 && openedChilds[i] ? (
                                    <div className={table__row + " " + table__row_sub}>
                                        {
                                            child.map((c, j) => (
                                                <div
                                                    className={table__rowWrapper + " " + table__rowWrapper_sub}
                                                    style={{gridTemplateColumns: columnsWidth}}
                                                    key={j}
                                                >
                                                    {
                                                        c.map(({value, type}, k) => {
                                                            
                                                            let formatedValue = value;
            
                                                            if (type === "number") formatedValue = parseFloat(formatedValue).toLocaleString(locale);
            
                                                            if (type === "img") formatedValue = (() => <img src={value} alt="" className={table__cellImg} />)();
                                                            
                                                            if (type === "url") formatedValue = (() => <a href={value} className={table__cellLink} >Click</a>)();
            
                                                            return (
                                                                <div className={table__cell} key={k} style={{minWidth: headers[j].width.indexOf("px") > 0 ? headers[j].width : "120px"}}>
                                                                    {formatedValue}
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : ""
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Table;