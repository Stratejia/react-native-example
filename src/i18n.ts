import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales/resources';

const defaultLanguage = 'en';

const defaultNamespace = 'common';

use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  ns: defaultNamespace,
  defaultNS: defaultNamespace,
  resources,
});

export { defaultNamespace };
