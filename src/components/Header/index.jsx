import { useState } from "react";

import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Logo from "../../assets/svg/logo";
import CalendarIcon from "../Icons/Calendar";
import PersonIcon from "../Icons/Person";
import BurgerMenuIcon from "../Icons/BurgerMenu";
import CloseIcon from "../Icons/Close";
import Button from "../Button";
import ConnectWalletModal from "../ConnectWalleteModal";

// Data
import mainRoutes from "../../routes/main";
import LocaleIcon from "../Icons/locale";
import CopyOutlineIcon from "../Icons/CopyOutline";

// Helpers
import getLocale from "../../helpers/getLoacale";
import RoundedCrossIcon from "../Icons/RoundedCross";
import ExitIcon from "../Icons/Exit";
import RoundedFillCheckIcon from "../Icons/RoundedFillCheck";

const {
   header,
   header__logo,
   header__nav,
   header__nav_shown,
   header__navMobile,
   header__navMobileIcon,
   header__navMobileIcon_close,
   header__mobileButton,
   header__navMenu,
   header__navMenuItem,
   header__navMenuLink,
   header__navMenuLink_active,
   header__navButtons,
   header__navIcon,

   header__language,
   header__languageIcon,
   header__languageList,
   header__languageListSeparator,
   header__languageLink,

   header__wallet,
   header__walletProfile,
   header__walletNumber,
   header__walletCopyBtn,

   header__profileButton,
   header__dropDownMenu,
   header__dropDownMenu_shown,
   header__dropDownMenuItem,
   header__dropDownMenuIcon,
   header__dropDownMenuText,
   
   hideOnMob
} = classes;


const initState = window.initState ? window.initState : {
   kyc: false,
   wallet: null,
   isLogedIn: false
};

export default function Header(props) {

   const locale = getLocale();

   const {
      kyc,
      isLogedIn,
      wallet
   } = initState;

   const path = window.location.pathname;

   const [menuState, setMenuState] = useState(false);

   const showMenu = () => {
      setMenuState(true);
      document.querySelector("body").style.overflow = "hidden";
   };

   const hideMenu = () => {
      setMenuState(false);
      setMenuShown(false);
      document.querySelector("body").style.overflow = null;
   };

   const connectWallet = () => {
      hideMenu();
      props.setModal((props) => <ConnectWalletModal {...props} />);
   };

   const [menuShown, setMenuShown] = useState(false);
   const [menuHasShown, setMenuHasShown] = useState(false);

   const profileIcon = (className = "") => {

      const dropDownMenuItems = [
         {
            "text": {
               "ru-RU": "KYC",
               "en-US": "KYC"
            },
            "href": "/kyc",
            "icon": kyc ? "check" : ""
         },
         // {
         //    "text": {
         //       "ru-RU": "Кошелёк",
         //       "en-US": "Wallet"
         //    },
         //    "href": "/wallet",
         //    "icon": ""
         // },
         // {
         //    "text": {
         //       "ru-RU": "История Транзакция",
         //       "en-US": "Recent Transaction"
         //    },
         //    "href": "/transactions",
         //    "icon": ""
         // },
         {
            "text": {
               "ru-RU": "Ваш NFT",
               "en-US": "Your NFT"
            },
            "href": "/your-nft",
            "icon": ""
         },
         {
            "text": {
               "ru-RU": "Профиль",
               "en-US": "Profile"
            },
            "href": "/profile",
            "icon": ""
         },
         {
            "text": {
               "ru-RU": wallet ? "Отключить кошелёк" : "Подключить кошелёк",
               "en-US": wallet ? "Disconnect Wallet" : "Connect Wallet"
            },
            "href": wallet ? "/wallet" : "m:connectWallet",
            "icon": ""
         },
         {
            "text": {
               "ru-RU": "Выйти",
               "en-US": "Exit profile"
            },
            "href": "/auth/exit.php",
            "icon": "exit"
         },
      ]

      return (
         <div className={header__profileButton}>
            {
               isLogedIn ? (
                  <button
                     type="button"
                     onClick={() => {setMenuShown (!menuShown); setMenuHasShown(true)}}
                     className={ className ? className : header__navIcon}
                  >
                     {
                        menuShown ? (
                           <RoundedCrossIcon />
                        ) : (
                           <PersonIcon />
                        )
                     }
                  </button>
               )
               : (
                  <a href="/sign-in" className={ className ? className : header__navIcon}>
                     <PersonIcon />
                  </a>
               )
            }
            {
               isLogedIn ? (
                  <div
                     className={header__dropDownMenu + (menuShown ? " " + header__dropDownMenu_shown : "")}
                     style={{
                        display: !menuHasShown ? "none" : null
                     }}
                  >
                     {
                        dropDownMenuItems.map(({href, icon, text}, i) => (
                           href === "m:connectWallet" ? (
                              <button type="button" className={header__dropDownMenuItem} key={i} onClick={connectWallet}>
                                 <span className={header__dropDownMenuText}>
                                    {text[locale]}
                                 </span>
                              </button>
                           ) : (
                              <a href={href} key={i} className={header__dropDownMenuItem}>
                                 {icon === "exit" ? <ExitIcon className={header__dropDownMenuIcon} /> : ""}
                                 {icon === "check" ? <RoundedFillCheckIcon className={header__dropDownMenuIcon} /> : ""}

                                 <span className={header__dropDownMenuText}>
                                    {text[locale]}
                                 </span>
                              </a>
                           )
                        ))
                     }
                  </div>
               ) : ""
            }
         </div>
      );
   }

   return (
      <header className={header}>
         <a href="/">
            <Logo className={header__logo} />
         </a>

         <button className={header__mobileButton} type="button" onClick={showMenu}>
            <BurgerMenuIcon />
         </button>

         <nav className={header__nav + (menuState ? " " + header__nav_shown : "")}>
            <div className={header__navMobile}>
               <a href="/calendar" className={header__navMobileIcon}>
                  <CalendarIcon />
               </a>
               
               {
                  wallet ? (
                     <div className={header__walletProfile}>

                        <div className={header__wallet}>
                           <p className={header__walletNumber}>
                              {wallet.substring(0, 6)}...{wallet.substring(wallet.length - 4)}
                           </p>

                           <button
                              type="button"
                              className={header__walletCopyBtn}
                              onClick={() => navigator.clipboard.writeText(wallet)}
                           >
                              <CopyOutlineIcon />
                           </button>
                        </div>

                        {
                           profileIcon(header__navMobileIcon)
                        }
                     </div>
                  ) : (
                     profileIcon(header__navMobileIcon)
                  )
               }
               <button
                  className={header__navMobileIcon + " " + header__navMobileIcon_close}
                  type="button"
                  onClick={hideMenu}
               >
                  <CloseIcon />
               </button>
            </div>

            <ul className={header__navMenu}>
               {mainRoutes.map(({ text, href }, i) => {
                  let className = header__navMenuLink;

                  if (href === path || href + "/" === path) {
                     className += " " + header__navMenuLink_active;
                  }

                  return (
                     <li className={header__navMenuItem} key={i}>
                        <a href={href} className={className} title={text[locale]}>
                           {text[locale]}
                        </a>
                     </li>
                  );
               })}
            </ul>

            <div className={header__navButtons}>
               <a href="/calendar" className={header__navIcon + " " + hideOnMob} title={lang.calendar[locale]}>
                  <CalendarIcon />
               </a>
               {
                  isLogedIn ? (
                     <Button href="/buy-artr" className="">
                        {lang.buyARTR[locale]}
                     </Button>
                  ) : <div></div>
               }

               <div className={header__language}>
                  <LocaleIcon className={header__languageIcon} />   
                  <div className={header__languageList}>
                     <a
                        href="/?language=ru"
                        className={header__languageLink}
                     >RU</a>
                     <hr className={header__languageListSeparator} />
                     <a
                        href="/?language=en"
                        className={header__languageLink}
                     >EN</a>
                  </div>
               </div>

               {
                  wallet ? (
                     <div className={header__walletProfile + " " + hideOnMob}>

                        <div className={header__wallet}>
                           <p className={header__walletNumber}>
                              {wallet.substring(0, 6)}...{wallet.substring(wallet.length - 4)}
                           </p>

                           <button
                              type="button"
                              className={header__walletCopyBtn}
                              onClick={() => navigator.clipboard.writeText(wallet)}
                           >
                              <CopyOutlineIcon />
                           </button>
                        </div>

                        {
                           profileIcon(header__navIcon)
                        }
                     </div>
                  ) : (
                     profileIcon(header__navIcon + " " + hideOnMob)
                  )
               }
               
               {/* <Button onClick={connectWallet} className="">
                  Connect Wallet
               </Button> */}
            </div>
         </nav>
      </header>
   );
}
