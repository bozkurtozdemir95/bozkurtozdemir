import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './assets/i18n/en.json'
import trJSON from './assets/i18n/tr.json'
i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        tr: { ...trJSON },
    },
    lng: "en",
});