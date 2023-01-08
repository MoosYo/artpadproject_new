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
   
   hideOnMob
} = classes;

export default function Header(props) {

   const locale = "ru-RU";
   const isLogedIn = false;
   const wallet = null;

   const path = window.location.pathname;

   const [menuState, setMenuState] = useState(false);

   const showMenu = () => {
      setMenuState(true);
      document.querySelector("body").style.overflow = "hidden";
   };

   const hideMenu = () => {
      setMenuState(false);
      document.querySelector("body").style.overflow = null;
   };

   const connectWallet = () => {
      hideMenu();
      props.setModal((props) => <ConnectWalletModal {...props} />);
   };

   return (
      <header className={header}>
         <Logo className={header__logo} />

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
                              onClick={() => {}}
                           >
                              <CopyOutlineIcon />
                           </button>
                        </div>

                        <a href={isLogedIn ? "/profile" : "/sign-in"} className={header__navMobileIcon}>
                           <PersonIcon />
                        </a>
                     </div>
                  ) : (
                     <a href={isLogedIn ? "/profile" : "/sign-in"} className={header__navMobileIcon}>
                        <PersonIcon />
                     </a>
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
                  ) : ""
               }

               <div className={header__language}>
                  <LocaleIcon className={header__languageIcon} />   
                  <div className={header__languageList}>
                     <a
                        href="/language=ru"
                        className={header__languageLink}
                     >RU</a>
                     <hr className={header__languageListSeparator} />
                     <a
                        href="/language=en"
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
                              onClick={() => {}}
                           >
                              <CopyOutlineIcon />
                           </button>
                        </div>

                        <a href={isLogedIn ? "/profile" : "/sign-in"} className={header__navIcon} title={isLogedIn ? lang.profile[locale] : lang.signin[locale]}>
                           <PersonIcon />
                        </a>
                     </div>
                  ) : (
                     <a href={isLogedIn ? "/profile" : "/sign-in"} className={header__navIcon} title={isLogedIn ? lang.profile[locale] : lang.signin[locale]}>
                        <PersonIcon />
                     </a>
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
