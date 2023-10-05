import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en.json';
import af from './translations/af.json';

const resources = {
	en,
	af,
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
	resources,
	defaultNS: 'translation',
	fallbackLng: 'en',
});
