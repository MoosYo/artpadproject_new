import { useState } from "react";

import classes from "./styles.module.scss";

// Components
import Logo from "../../assets/svg/logo";
import CalendarIcon from "../Icons/Calendar";
import PersonIcon from "../Icons/Person";

const {
    header,
    header__logo,
    header__nav,
    header__navMenu,
    header__navMenuItem,
    header__navMenuLink,
    header__navMenuLink_active,
    header__navButtons,
    header__navIcon
} = classes;

export default function Header (props) {

    const menu = [
        {
            text: "Home",
            href: "/"
        },
        {
            text: "Projects",
            href: "/profile"
        },
        {
            text: "Levels",
            href: "/levels"
        },
        {
            text: "Swap",
            href: "/swap"
        },
        {
            text: "FAQ",
            href: "/faq"
        },
        {
            text: "NFT Marketplace",
            href: "/nft-marketplace"
        }
    ];

    const path = window.location.pathname;

    return (
        <header className={header}>
            <Logo className={header__logo} />

            <nav className={header__nav}>
                <ul className={header__navMenu}>
                    {
                        menu.map(({text, href}, i) => {

                            let className = header__navMenuLink;

                            if (href === path || href + "/" === path) {
                                className += " " + header__navMenuLink_active;
                            }

                            return (
                                <li className={header__navMenuItem} key={i}>
                                    <a href={href} className={className}>
                                        {text}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className={header__navButtons}>
                    <a href="#" className={header__navIcon}>
                        <CalendarIcon />
                    </a>
                    <a href="#" className={header__navIcon}>
                        <PersonIcon />
                    </a>
                    <a href="#" className="">
                        Buy ARTR
                    </a>
                    <a href="#" className="">
                        Connect Wallet                        
                    </a>
                </div>
            </nav>
        </header>
    )
}