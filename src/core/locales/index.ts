import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
const resources = {
    en: {
        translation: require('./en/translation.json'),
    },
    ar: {
        translation: require('./ar/translation.json'),
    },
};
i18n.use(initReactI18next).init({
    fallbackLng: 'ar',
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    resources,
    ns: ['translation'],
    defaultNS: 'translation',
});

export default i18n;
