import Button from "../Button";
import Medium from "../Icons/Medium";
import Telegram from "../Icons/Telegram";
import Twitter from "../Icons/Twitter";
import AuditBy from "../../assets/quillaudits.png";

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
   audit,
   audit__link,
   asside,
   font_fix,
   link_list_fix,
} = classes;

export default function Footer() {
   const local = "ru-RU";
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

   const comm = [
      {
         text: "Telegram",
         href: "#",
      },
      {
         text: "DEM",
         href: "#",
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
                  <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M4.45457 6.0534C4.49464 5.65756 4.34368 5.26631 4.04811 4.9999L1.03726 1.37285V0.831055H10.3859L17.612 16.6787L23.9648 0.831055H32.877V1.37285L30.3027 3.84105C30.0807 4.01022 29.9707 4.28826 30.0166 4.56345V22.6987C29.9707 22.9739 30.0807 23.2519 30.3027 23.4211L32.8167 25.8893V26.4311H20.1712V25.8893L22.7756 23.3609C23.0315 23.105 23.0315 23.0298 23.0315 22.6385V7.97979L15.7904 26.3709H14.8119L6.38151 7.97979V20.3057C6.31122 20.8239 6.48333 21.3457 6.84819 21.7204L10.2354 25.8291V26.3709H0.630798V25.8291L4.018 21.7204C4.3802 21.345 4.54228 20.8199 4.45457 20.3057V6.0534Z"
                        fill="white"
                     ></path>
                  </svg>
               </a>
               <a href="#" title="twitter" className={social}>
                  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M25.4108 2.53895C25.0023 2.72618 24.5824 2.8842 24.1533 3.01249C24.6613 2.41873 25.0486 1.72009 25.285 0.955564C25.3381 0.784197 25.2831 0.596621 25.1468 0.484543C25.0107 0.372379 24.8216 0.358943 24.6717 0.450738C23.7604 1.00931 22.7773 1.41072 21.7465 1.64545C20.7081 0.596795 19.2977 0 17.8397 0C14.762 0 12.2582 2.58767 12.2582 5.76832C12.2582 6.01883 12.2735 6.26794 12.3039 6.5136C8.48483 6.16705 4.93433 4.22706 2.49621 1.13612C2.40932 1.02595 2.27546 0.966573 2.13842 0.977928C2.00129 0.989023 1.87808 1.06894 1.8088 1.19177C1.3143 2.06871 1.05288 3.07169 1.05288 4.09218C1.05288 5.4821 1.53304 6.80086 2.38122 7.83131C2.12332 7.739 1.87305 7.62363 1.63418 7.48658C1.50595 7.41282 1.34944 7.41395 1.22204 7.48944C1.09456 7.56494 1.01463 7.7038 1.01128 7.85558C1.01069 7.88115 1.01069 7.90672 1.01069 7.93264C1.01069 10.0073 2.09111 11.8752 3.74295 12.8933C3.60104 12.8786 3.45921 12.8574 3.31831 12.8296C3.17304 12.8009 3.02367 12.8535 2.92571 12.968C2.82758 13.0824 2.79512 13.2419 2.84033 13.3875C3.45175 15.3604 5.02592 16.8115 6.92894 17.2539C5.35058 18.2756 3.5456 18.8108 1.65079 18.8108C1.25542 18.8108 0.857794 18.7868 0.468634 18.7392C0.275312 18.7154 0.0904609 18.8334 0.0246224 19.0234C-0.0412161 19.2135 0.0285643 19.4254 0.193035 19.5344C2.62721 21.1474 5.44183 22 8.33243 22C14.015 22 17.5699 19.2306 19.5513 16.9073C22.0221 14.0103 23.4392 10.1758 23.4392 6.38713C23.4392 6.22885 23.4369 6.06901 23.4322 5.90969C24.407 5.15063 25.2463 4.232 25.9293 3.17614C26.033 3.01578 26.0218 2.80385 25.9016 2.65623C25.7816 2.50853 25.5815 2.46077 25.4108 2.53895Z"
                        fill="white"
                     ></path>
                  </svg>
               </a>
               <a href="#" title="telegram" className={social}>
                  <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1.77792 10.4521L19.0522 3.32846C20.7574 2.58642 26.5403 0.21188 26.5403 0.21188C26.5403 0.21188 29.2092 -0.82698 28.9868 1.69597C28.9127 2.73483 28.3196 6.37083 27.7265 10.3037L25.873 21.9537C25.873 21.9537 25.7247 23.6604 24.4644 23.9573C23.204 24.2541 21.1281 22.9184 20.7574 22.6216C20.4609 22.399 15.197 19.0598 13.2694 17.4273C12.7505 16.982 12.1573 16.0916 13.3436 15.0527C16.0126 12.604 19.2005 9.56162 21.1281 7.63231C22.0178 6.74186 22.9075 4.66414 19.2005 7.18708L8.74696 14.2365C8.74696 14.2365 7.56074 14.9785 5.33658 14.3107C3.11241 13.6429 0.517558 12.7524 0.517558 12.7524C0.517558 12.7524 -1.26177 11.6393 1.77792 10.4521Z"
                        fill="white"
                     ></path>
                  </svg>
               </a>
               <a href="#" title="discord" className={social}>
                  <svg width="29" height="24" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clipPath="url(#clip0)">
                        <path
                           d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                           fill="#ffffff"
                        ></path>
                     </g>
                     <defs>
                        <clipPath id="clip0">
                           <rect width="71" height="55" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
               </a>
            </div>
         </div>
         <div className={asside}>
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
                  <ul className={links_list + " " + link_list_fix}>
                     {comm.map(({ text, href }, key) => (
                        <li className={links_list__item} key={key}>
                           <Button variant={"outline"} className={font_fix} href={href}>
                              {text}
                           </Button>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className={audit}>
               <h3 className={footer__title}>Audited by:</h3>
               <a href="/public/img/defimoon.png" target="_blank" className={audit__link}>
                  <img src="/public/img/defimoon.png" alt="Audited by QuillAudits" />
               </a>
            </div>
         </div>
      </footer>
   );
}
