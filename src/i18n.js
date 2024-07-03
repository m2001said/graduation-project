import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enMain from "./locales/en/main.json";
import arMain from "./locales/ar/main.json";
import enTemplateSlice1 from "./locales/en/templateSlice1.json";
import arTemplateSlice1 from "./locales/ar/templateSlice1.json";
import enTemplateSlice2 from "./locales/en/templateSlice2.json";
import arTemplateSlice2 from "./locales/ar/templateSlice2.json";
import enTemplateSlice3 from "./locales/en/templateSlice3.json";
import arTemplateSlice3 from "./locales/ar/templateSlice3.json";
import enTemplateSlice4 from "./locales/en/templateSlice4.json";
import arTemplateSlice4 from "./locales/ar/templateSlice4.json";
import enTemplateSlice5 from "./locales/en/templateSlice5.json";
import arTemplateSlice5 from "./locales/ar/templateSlice5.json";
import enTemplateSlice6 from "./locales/en/templateSlice6.json";
import arTemplateSlice6 from "./locales/ar/templateSlice6.json";
import enTemplateSlice7 from "./locales/en/templateSlice7.json";
import arTemplateSlice7 from "./locales/ar/templateSlice7.json";
import enTemplateSlice8 from "./locales/en/templateSlice8.json";
import arTemplateSlice8 from "./locales/ar/templateSlice8.json";
import enTemplateSlice9 from "./locales/en/templateSlice9.json";
import arTemplateSlice9 from "./locales/ar/templateSlice9.json";
import enTemplateSlice10 from "./locales/en/templateSlice10.json";
import arTemplateSlice10 from "./locales/ar/templateSlice10.json";
import enTemplateSlice11 from "./locales/en/templateSlice11.json";
import arTemplateSlice11 from "./locales/ar/templateSlice11.json";
import enTemplateSlice12 from "./locales/en/templateSlice12.json";
import arTemplateSlice12 from "./locales/ar/templateSlice12.json";
import enTemplateSlice13 from "./locales/en/templateSlice13.json";
import arTemplateSlice13 from "./locales/ar/templateSlice13.json";
import enTemplateSlice14 from "./locales/en/templateSlice14.json";
import arTemplateSlice14 from "./locales/ar/templateSlice14.json";
import enTemplateSlice15 from "./locales/en/templateSlice15.json";
import arTemplateSlice15 from "./locales/ar/templateSlice15.json";
import enTemplateSlice16 from "./locales/en/templateSlice16.json";
import arTemplateSlice16 from "./locales/ar/templateSlice16.json";
import enTemplateSlice17 from "./locales/en/templateSlice17.json";
import arTemplateSlice17 from "./locales/ar/templateSlice17.json";
import enTemplateSlice18 from "./locales/en/templateSlice18.json";
import arTemplateSlice18 from "./locales/ar/templateSlice18.json";

const savedLanguage = localStorage.getItem("language") || "en";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      main: enMain,
      templateSlice1: enTemplateSlice1,
      templateSlice2: enTemplateSlice2,
      templateSlice3: enTemplateSlice3,
      templateSlice4: enTemplateSlice4,
      templateSlice5: enTemplateSlice5,
      templateSlice6: enTemplateSlice6,
      templateSlice7: enTemplateSlice7,
      templateSlice8: enTemplateSlice8,
      templateSlice9: enTemplateSlice9,
      templateSlice10: enTemplateSlice10,
      templateSlice11: enTemplateSlice11,
      templateSlice12: enTemplateSlice12,
      templateSlice13: enTemplateSlice13,
      templateSlice14: enTemplateSlice14,
      templateSlice15: enTemplateSlice15,
      templateSlice16: enTemplateSlice16,
      templateSlice17: enTemplateSlice17,
      templateSlice18: enTemplateSlice18,
    },
    ar: {
      main: arMain,
      templateSlice1: arTemplateSlice1,
      templateSlice2: arTemplateSlice2,
      templateSlice3: arTemplateSlice3,
      templateSlice4: arTemplateSlice4,
      templateSlice5: arTemplateSlice5,
      templateSlice6: arTemplateSlice6,
      templateSlice7: arTemplateSlice7,
      templateSlice8: arTemplateSlice8,
      templateSlice9: arTemplateSlice9,
      templateSlice10: arTemplateSlice10,
      templateSlice11: arTemplateSlice11,
      templateSlice12: arTemplateSlice12,
      templateSlice13: arTemplateSlice13,
      templateSlice14: arTemplateSlice14,
      templateSlice15: arTemplateSlice15,
      templateSlice16: arTemplateSlice16,
      templateSlice17: arTemplateSlice17,
      templateSlice18: arTemplateSlice18,
    },
  },
  lng: savedLanguage, // default language
  fallbackLng: "en",
  ns: [
    "main",
    "templateSlice1",
    "templateSlice2",
    "templateSlice3",
    "templateSlice4",
    "templateSlice5",
    "templateSlice6",
    "templateSlice7",
    "templateSlice8",
    "templateSlice9",
    "templateSlice10",
    "templateSlice11",
    "templateSlice12",
    "templateSlice13",
    "templateSlice14",
    "templateSlice15",
    "templateSlice16",
    "templateSlice17",
    "templateSlice18",
  ],
  defaultNS: "main",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
