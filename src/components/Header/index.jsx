import { useState } from "react";

import classes from "./styles.module.scss";

// Components
import Logo from "../../assets/svg/logo";
import CalendarIcon from "../Icons/Calendar";
import PersonIcon from "../Icons/Person";
import BurgerMenuIcon from "../Icons/BurgerMenu";
import CloseIcon from "../Icons/Close";

// Data
import mainRoutes from "../../routes/main";
import Button from "../Button";

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
    header__navIcon
} = classes;

export default function Header (props) {
    const path = window.location.pathname;

    const [menuState, setMenuState] = useState(false);

    return (
        <header className={header}>
            <Logo className={header__logo} />

            <button
                className={header__mobileButton}
                type="button"
                onClick={()=>setMenuState(true)}
            >
                <BurgerMenuIcon />
            </button>

            <nav
                className={header__nav + (menuState ? " " + header__nav_shown : "")}
            >
                <div className={header__navMobile}>
                    <a href="/calendar" className={header__navMobileIcon}>
                        <CalendarIcon />
                    </a>
                    <a href="/profile" className={header__navMobileIcon}>
                        <PersonIcon />
                    </a>
                    <button
                        className={header__navMobileIcon + " " + header__navMobileIcon_close}
                        type="button"
                        onClick={()=>setMenuState(false)}
                    >
                        <CloseIcon />
                    </button>
                </div>

                <ul className={header__navMenu}>
                    {
                        mainRoutes.map(({text, href}, i) => {

                            let className = header__navMenuLink;

                            if (href === path || href + "/" === path) {
                                className += " " + header__navMenuLink_active;
                            }

                            return (
                                <li className={header__navMenuItem} key={i}>
                                    <a
                                        href={href}
                                        className={className}
                                        title={text}
                                    >
                                        {text}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className={header__navButtons}>
                    <a
                        href="/calendar"
                        className={header__navIcon}
                        title="Calendar"
                    >
                        <CalendarIcon />
                    </a>
                    <a
                        href="/profile"
                        className={header__navIcon}
                        title="Profile"
                    >
                        <PersonIcon />
                    </a>
                    <Button href="/buy-artr" className="">
                        Buy ARTR
                    </Button>
                    <Button href="/connect-wallet" className="">
                        Connect Wallet
                    </Button>
                </div>
            </nav>
        </header>
    )
}