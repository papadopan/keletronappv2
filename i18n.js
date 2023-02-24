import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import el from './locales/el/translation.json';

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    compatibilityJSON: 'v3',
    lng: 'el',
    resources: {
      en,
      el
    },
    fallbackLng: 'el',
    keySeparator: false,
    interpolation: {
      escapeValue: false // not needed for react!!
    }
  });

export default i18n;
