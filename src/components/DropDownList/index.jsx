import classes from "./styles.module.scss";

import { useState } from "react";
import Arrow from "../Icons/arrow";

const {
    dropDownList,
    dropDownList__Block,
    dropDownList__list,
    dropDownList__list_shown,
    dropDownList__listItem,
    dropDownList__listItem_active,
} = classes;

const DropDownList = ({className = "", selectedItem = 0, emptyText = "", onSelect = () => {}, disabledOptions = () => false, items = [{index: 0, text: ""}]}) => {

    const [listState, setListState]  = useState(false);

    return (
        <div className={dropDownList + (className ? " " + className : "")} onMouseLeave={() => setListState(false)}>
            <div className={dropDownList__Block} onClick={() => setListState(listState ? false : true)}>
                {
                    selectedItem >= 0 && items.length > 0 && selectedItem !== null ? <>
                        {items[selectedItem].text}
                        <Arrow style={{transform: listState ? "rotate(-90deg)" : null}} />
                    </>: (<>
                        {emptyText}
                        <Arrow style={{transform: listState ? "rotate(-90deg)" : null}} />
                    </>)
                }
            </div>
            <div className={dropDownList__list + (listState ? " " + dropDownList__list_shown : "")}>
                {
                    items.map(({index, text}, i) => (
                        <div
                            className={dropDownList__listItem + (disabledOptions(index) ? " " + dropDownList__listItem_active: "")}
                            key={i}
                            onClick={() => {if (disabledOptions(index)) { onSelect(i); setListState(false); }}}
                        >
                            {text}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default DropDownList;