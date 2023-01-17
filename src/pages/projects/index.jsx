import { useState } from "react";
import Button from "../../components/Button";
import SearchIcon from "../../components/Icons/Search";
import Input from "../../components/Input";
import getLocale from "../../helpers/getLoacale";
import lang from "./local.json";
import classes from "./styles.module.scss";

const {
    projects,
    projects__header,
    projects__tabs,
    projects__tab,
    projects__tab_active,
    projects__search,
    projects__searchIcon,
    projects__searchInput,
    projects__title,
    projects__list,

    projects__card,
    projects__cardHeader,
    projects__cardHeaderText,
    projects__cardName,
    projects__cardNameCode,
    projects__cardLogo,
    projects__cardStatus,
    projects__cardDescription,
    projects__cardData,
    projects__cardDataName,
    projects__cardDataValue,
    projects__cardReg,
    projects__cardRegText,
    projects__cardRegValue,
    projects__cardProgress,
    projects__cardBar,
    projects__cardCounter,
    projects__cardBusd,
    projects__cardGoal,
    projects__cardListing,
    projects__cardListingText,
    projects__cardListingValue,
    projects__cardLink
} = classes;

const initState = window.initState?.projects ? window.initState.projects : {
    list: [
        {
            id: 1,
            name: "Artery",
            nameCode: "ARTR",
            logo: "https://artpad.kadys.webtm.ru/uploads/tokens/2.png",
            status: "upcoming",
            description: "Some text",
            total: 100,
            start: Math.floor(new Date().getTime() / 1000),
            price: 0.5,
            registration: Math.floor(new Date().getTime() / 1000 + (2 * 24 * 60 * 60)),
            busd: 10,
            done: 20,
            goal: 100,
            listing: Math.floor(new Date().getTime() / 1000 + (7 * 24 * 60 * 60))
        }
    ],
    all: 4,
    upcoming: 3,
    active: 0,
    ended: 0,
    vesting: 1
};

const ProjectsPage = ({setModal}) => {

    const locale = getLocale();

    const [current, setCurrent] = useState("all");

    const [search, setSearch] = useState("");

    return (
        <div className={projects}>
            <div className={projects__header}>
                <div className={projects__tabs}>
                    <Button 
                        className={projects__tab + (current === "all" ? " " + projects__tab_active : "")}
                        variant="outline"
                        onClick={() => setCurrent("all")}
                    >
                        {lang.all[locale]} [{initState.all}]
                    </Button>
                    <Button 
                        className={projects__tab + (current === "upcoming" ? " " + projects__tab_active : "")}
                        variant="outline"
                        onClick={() => setCurrent("upcoming")}
                    >
                        {lang.upcoming[locale]} [{initState.upcoming}]
                    </Button>
                    <Button 
                        className={projects__tab + (current === "active" ? " " + projects__tab_active : "")}
                        variant="outline"
                        onClick={() => setCurrent("active")}
                    >
                        {lang.active[locale]} [{initState.active}]
                    </Button>
                    <Button 
                        className={projects__tab + (current === "ended" ? " " + projects__tab_active : "")}
                        variant="outline"
                        onClick={() => setCurrent("ended")}
                    >
                        {lang.ended[locale]} [{initState.ended}]
                    </Button>
                    <Button 
                        className={projects__tab + (current === "vesting" ? " " + projects__tab_active : "")}
                        variant="outline"
                        onClick={() => setCurrent("vesting")}
                    >
                        {lang.vesting[locale]} [{initState.vesting}]
                    </Button>
                </div>

                <label
                    className={projects__search}
                >
                    <SearchIcon className={projects__searchIcon} />
                    <input
                        type="text"
                        name="search"
                        value={search}
                        placeholder={lang.search[locale]}
                        className={projects__searchInput}
                        onChange={e => setSearch(e.target.value)}
                    />
                </label>
            </div>

            <h2 className={projects__title}>
                {
                    search.length === 0 ? (
                        lang[current][locale] + " " + lang.ido[locale]
                    ) : (
                        lang.result[locale] + " \"" + search + "\""
                    )
                }
            </h2>

            <div className={projects__list}>
                {
                    initState.list.map((project, i) => {

                        let render = false;

                        if (search.length === 0) {
                            if (current === "all") {
                                render = true;
                            }
                            else if (project.status.toLowerCase() === current){
                                render = true;
                            }
                            else {
                                render = false;
                            }
                        }
                        else if (project.name?.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                            render = true;
                        }
                        else {
                            render = false;
                        }

                        if ( render ) {
                            const regDays = Math.floor((project.registration * 1000 - new Date().getTime()) / 1000 / 60 / 60 / 24);
                            const regHours = Math.floor((project.registration * 1000 - new Date().getTime() - (regDays * 24 * 60 * 60 * 1000)) / 1000 / 60 / 60);

                            return (
                                <div key={project.id} className={projects__card}>
                                    <div className={projects__cardHeader}>
                                        <div className={projects__cardHeaderText}>
                                            <h3 className={projects__cardName}>
                                                {project.name}
                                            </h3>
                                            <p className={projects__cardNameCode}>
                                                ${project.nameCode}
                                            </p>
                                        </div>

                                        <img className={projects__cardLogo} src={project.logo} alt="" />
                                    </div>
                                    <div className={projects__cardStatus}>
                                        {lang[project.status][locale]}
                                    </div>
                                    <p className={projects__cardDescription}>
                                        {project.description}
                                    </p>
                                    <div className={projects__cardData}>
                                        <p className={projects__cardDataName}>
                                            {lang.total[locale]}
                                        </p>
                                        <p className={projects__cardDataValue}>
                                            {project.total}
                                        </p>
                                    </div>
                                    <div className={projects__cardData}>
                                        <p className={projects__cardDataName}>
                                            {lang.start[locale]}
                                        </p>
                                        <p className={projects__cardDataValue}>
                                            {new Date(project.start * 1000).toLocaleString(locale)}
                                        </p>
                                    </div>
                                    <div className={projects__cardData}>
                                        <p className={projects__cardDataName}>
                                            {lang.price[locale]}
                                        </p>
                                        <p className={projects__cardDataValue}>
                                            1 {project.nameCode} = {project.price.toLocaleString(locale)} $
                                        </p>
                                    </div>

                                    <div className={projects__cardReg}>
                                        <p className={projects__cardRegText}>
                                            {
                                                project.registration ? (
                                                    lang.reg[locale] + " " +
                                                    regDays + " " + (regDays > 1 ? lang.days[locale] : lang.day[locale]) + " " +
                                                    regHours + " " + (regHours > 1 ? lang.hours[locale] : lang.hour[locale])
                                                ) : ""
                                            }
                                        </p>

                                        <p className={projects__cardRegValue}>
                                            {Math.floor(project.done / project.goal * 100)}%
                                        </p>

                                    </div>

                                    <div className={projects__cardProgress}>
                                        <div className={projects__cardBar} style={{width: Math.floor(project.done / project.goal * 100) + "%"}} />
                                    </div>

                                    <div className={projects__cardCounter}>
                                        <p className={projects__cardBusd}>
                                            {project.busd} BUSD
                                        </p>
                                        <p className={projects__cardGoal}>
                                            {project.done + " / " + project.goal + " " + project.nameCode}
                                        </p>
                                    </div>

                                    <div className={projects__cardListing}>
                                        <p className={projects__cardListingText}>
                                            {lang.listing[locale]}
                                        </p>
                                        <p className={projects__cardListingValue}>
                                            {new Date(project.listing * 1000).toLocaleString(locale)}
                                        </p>
                                    </div>

                                    <a href={"/projects/"+project.id} className={projects__cardLink}> </a>
                                </div>
                            );
                        }

                        return "";
                    })
                }
            </div>
        </div>
    );
}

export default ProjectsPage;