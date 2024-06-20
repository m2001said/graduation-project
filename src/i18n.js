import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enMain from "./locales/en/main.json";
import arMain from "./locales/ar/main.json";
import enTemplateSlice1 from "./locales/en/templateSlice1.json";
import arTemplateSlice1 from "./locales/ar/templateSlice1.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      main: enMain,
      templateSlice1: enTemplateSlice1,
    },
    ar: {
      main: arMain,
      templateSlice1: arTemplateSlice1,
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  ns: ["main", "templateSlice1"], // Specify namespaces
  defaultNS: "main",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
