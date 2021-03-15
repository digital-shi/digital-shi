import i18n from 'i18next';
import englishTranslation from './en/translation.json';
import chineseTranslation from './zh/translation.json';
import koreanTranslation from './ko/translation.json';
import italianTranslation from './it/translation.json';
import frenchTranslation from './fr/translation.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: englishTranslation,
  },
  ko : {
    translation: koreanTranslation
  },
  it : {
    translation: italianTranslation
  },
  zh : {
    translation: chineseTranslation
  },
  fr : {
    translation: frenchTranslation
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;