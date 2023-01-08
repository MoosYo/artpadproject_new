import classes from "./styles.module.scss";

const {
    tabs,
    tabs__item,
    tabs__item_active
} = classes;

export default function Tabs (props) {

    const locale = "en-US";

    const tabsList = props.tabs;
    const path = window.location.pathname;
    return (
        <div className={tabs}>
            {
                tabsList.map(({href, text}, i) => {
                    
                    let className = tabs__item;

                    if (href === path || href + "/" === path) {
                        className += " " + tabs__item_active;
                    }

                    return (
                        <a
                            href={href}
                            className={className}
                            title={text}
                            key={i}
                        >
                            {text[locale]}
                        </a>
                    )
                })
            }
        </div>
    )
}