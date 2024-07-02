import { useTranslation } from "react-i18next";

export const useRightToLeft = () => {
  const { i18n } = useTranslation();
  return i18n.language === "ar"; // true if language is Arabic, false otherwise
};
