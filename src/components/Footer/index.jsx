import Medium from "../Icons/Medium";
import Telegram from "../Icons/Telegram";
import Twitter from "../Icons/Twitter";
import classes from "./index.module.scss";

const {
   footer,
   footer__title,
   column,
   column__group,
   description,
   description__text,
   socials_list,
   social,
   navigation,
   links_list,
   links_list__item,
   links_list__link,
   links_list__link_active,
   community,
} = classes;

export default function Footer() {
   const navigationItems = [
      {
         text: "Home",
         href: "/",
      },
      {
         text: "Projects",
         href: "/profile",
      },
      {
         text: "Levels",
         href: "/levels",
      },
      {
         text: "Swap",
         href: "/swap",
      },
      {
         text: "FAQ",
         href: "/faq",
      },
      {
         text: "NFT Marketplace",
         href: "/nft-marketplace",
      },
   ];

   const path = window.location.pathname;

   return (
      <footer className={footer}>
         <div className={column}>
            <div className={description}>
               <p className={description__text}>
                  ArtPad is a decentralized multi-chain fundraising platform enabling projects to raise capital and
                  promise safety to early stage investors. Stake ArtPad tokens to get priority-access to promising
                  projects.
               </p>
            </div>
            <div className={socials_list}>
               <a href="#" title="medium" className={social}>
                  <Medium />
               </a>
               <a href="#" title="twitter" className={social}>
                  <Telegram />
               </a>
               <a href="#" title="telegram" className={social}>
                  <Twitter />
               </a>
            </div>
         </div>
         <div className={column}>
            <div className={column__group}>
               <div className={navigation}>
                  <ul className={links_list}>
                     {navigationItems.map(({ text, href }, key) => {
                        let className = links_list__link;
                        if (href === path || href + "/" === path) {
                           className += " " + links_list__link_active;
                        }
                        return (
                           <li className={links_list__item} key={key}>
                              <a href={href} className={className}>
                                 {text}
                              </a>
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div className={community}>
                  <h3 className={footer__title}>Community:</h3>
                  <ul className={links_list}>
                     <li className={links_list__item}>
                        <a href="" className="community__link"></a>
                     </li>
                     <li className={links_list__item}>
                        <a href="" className="community__link"></a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="audit">
               <h3 className="footer__title">Audited by:</h3>
               <a href="#" className="audit__link"></a>
            </div>
         </div>
      </footer>
   );
}
