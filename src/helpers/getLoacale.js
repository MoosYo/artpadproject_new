const getLocale = () => {

    let locale = "en-US";

    if (window.initState?.locale) {
        const tmpLocale = window.initState.locale;

        if (tmpLocale === "ru") {
            locale = "ru-RU";
        }

        if (tmpLocale === "en") {
            locale = "en-US";
        }
    }

    return locale;
}

export default getLocale;