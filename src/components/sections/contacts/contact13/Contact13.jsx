import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Contact13 = ({ template }) => {
  const contact = template.contact;
  const { t, i18n } = useTranslation();
  
  const isRTL = i18n.language === "ar";  // Adjust this based on your language setup
  
  return (
    <div id="contact13" className="relative overflow-hidden bg-[var(--website-13-color-5)] lg:py-20 py-8 px-4 contact13">
      <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
        <div className="lg:w-1/2">
          <p className="text-[var(--website-13-color-4)]">{t(contact.title)}</p>
          <h1 className="text-[var(--website-13-color-2)] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
            {t(contact.subtitle)}
            <span className="underline decoration-[var(--website-13-color-4)]"> {t(contact.description)}</span>{" "}
          </h1>
          <div className="relative flex items-center pt-8">
            <button className="absolute md:left-4 left-1 rounded-full md:px-8 flex items-center md:text-sm text-xs bg-[var(--website-13-color-4)] text-[var(--website-13-color-1)] gap-2 transition ease-out duration-300 transform hover:scale-110 ">
              <img src={contact.icon} alt="right arrow" className="text-xl h-12" />
              <p className="text-[var(--website-13-color-1)]">{t(contact.buttonText)}</p>
            </button>
            <input
              type="email"
              placeholder={isRTL ? t("ادخل بريدك الالكتروني") : t("enter your email")}
              className="bg-[var(--website-13-color-1)] rounded-full w-full md:pl-6 pl-2 h-16 outline-none text-right"
            />
          </div>
        </div>
        <div className="lg:py-0 py-8 flex justify-center">
          {contact.imgUrl && <img src={contact.imgUrl} alt="subscribe image" className="lg:w-100 w-80 " />}
        </div>
      </section>
    </div>
  );
};

export default Contact13;
