import { useState } from "react";
import Arrow from "../Icons/arrow";
import scss from "./index.module.scss";

const {
   item,
   item_active,
   item__header,
   item__title,
   item__button,
   item__buttonIcon,
   item__content,
   item__button_active,
   item__content_active,
} = scss;

function AccordionItem({ title, children }) {
   const [isActive, setIsActive] = useState(false);
   const onActive = () => {
      setIsActive(!isActive);
   };
   return (
      <div className={item + (isActive ? " " + item_active : "")}>
         <button className={item__header} onClick={() => onActive()}>
            <h3 className={item__title}>{title}</h3>
            <div className={isActive ? item__button + " " + item__button_active : item__button}>
               <Arrow className={item__buttonIcon}></Arrow>
            </div>
         </button>
         <article className={isActive ? item__content + " " + item__content_active : item__content}>{children}</article>
      </div>
   );
}

export default AccordionItem;
