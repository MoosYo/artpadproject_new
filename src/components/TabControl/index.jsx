import { useState } from "react";
import classes from "./index.module.scss";

const { tab__layout, tab__header, tab__button, tab__button_active, tab__body, tab__footer, tab__link, vl } = classes;

function TabControl({ array }) {
   const [currentTab, setCurrentTab] = useState(0);
   const [currentContent, setCurrentContent] = useState(array[0].text);
   const [currentSocials, setCurrentSocials] = useState(array[0].socials);

   const selectTab = (id, text, socials) => {
      setCurrentTab(id);
      setCurrentContent(text);
      console.log(socials);
      setCurrentSocials(socials);
   };

   return (
      <div className={tab__layout}>
         <div className={tab__header}>
            {array.map(({ id, date, text, socials }, key) => (
               <button
                  type={"button"}
                  onClick={() => selectTab(id, text, socials)}
                  className={currentTab === id ? tab__button + " " + tab__button_active : tab__button}
                  key={key}
               >
                  {date}
               </button>
            ))}
         </div>
         <div className={tab__body}>
            <p dangerouslySetInnerHTML={{ __html: currentContent }} />
         </div>
         <div className={tab__footer}>
            {currentSocials
               ? currentSocials.map(({ title, href }, key) => (
                    <>
                       <a href={href} key={key}>
                          {title}
                       </a>
                       <div className={vl}></div>
                    </>
                 ))
               : null}
         </div>
      </div>
   );
}

export default TabControl;
