import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Footer17 = ({ template }) => {
  const { t, i18n } = useTranslation();
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;
    const isRTL = i18n.dir() === "rtl"; 

  return (
    <>
      <div className="text-[var(--website-17-color-4)] ">
        <div className="container17 bg-gradient-to-b from-[var(--website-17-color-1)] to-[var(--website-17-color-2)] rounded-t-3xl">
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">{footer.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-[var(--website-17-color-4)] pb-6">
            {footer.contacts.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <img src={item.icon} className="text-5xl icon-17" alt={`Icon ${index}`} />
                </div>
                <p className="font-bold">{item.title}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-space-around p-4  items-center flex-wrap">
            <a href="#" className="text-[var(--website-17-color-4)]">
              {footer.description}
            </a>
            <a href="" className="text-[var(--website-17-color-4)]">
              {isRTL ? t("حقوق الملكية") : t("termsOfServiceEn")}
            </a>{" "}
            <a href="" className="text-[var(--website-17-color-4)]">
              {isRTL ? t("سياسة الخصوصية") : t("privacyPolicyEn")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer17;
