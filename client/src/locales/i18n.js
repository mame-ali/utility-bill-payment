import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import amTranslation from "./am.json";
import omTranslation from "./om.json";

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: enTranslation },
		am: { translation: amTranslation },
		om: { translation: omTranslation },
	},
	lng: "en", // Default language
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
