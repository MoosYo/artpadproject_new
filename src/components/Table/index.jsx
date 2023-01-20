import getLocale from "../../helpers/getLoacale";
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
    table__rowWrapper,
    table__cell,
    table__cellImg,
    table__cellLink
} = classes;

const Table = ({headers = [], rows = [], className = "", style = {}}) => {

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

   if (columnsWidth === "") columnsWidth = null;

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
                    rows.map(({cells}, i) => (
                        <div className={table__row} key={i}>
                            <div className={table__rowWrapper} style={{gridTemplateColumns: columnsWidth}}>
                                {
                                    cells.map(({value, type}, j) => {
                                        
                                        let formatedValue = value;

                                        if (type === "number") formatedValue = parseFloat(formatedValue).toLocaleString(locale);

                                        if (type === "img") formatedValue = (() => <img src={value} alt="" className={table__cellImg} />)();
                                        
                                        if (type === "url") formatedValue = (() => <a href={value} className={table__cellLink} >Click</a>)();

                                        return (
                                            <div className={table__cell} key={j} style={{minWidth: headers[j].width.indexOf("px") > 0 ? headers[j].width : "120px"}}>
                                                {formatedValue}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Table;