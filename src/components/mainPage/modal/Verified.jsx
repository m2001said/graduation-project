import React from "react";
import "./verifiedmodel.css";
import { useTranslation } from "react-i18next";

const Verified = ({ toggleForm }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="verified-icon">
        <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg" alt="check-icon" />
      </div>
      <h1 className="message-success">{t("USER.SUCCESSFUL")}</h1>
      <p className="message-info"> {t("USER.CHECK_EMAIL")}</p>
      <div className="modal-form">
        <button className={`form-button`} onClick={toggleForm}>
          {t("USER.GO_LOGIN")}
        </button>
      </div>
    </>
  );
};

export default Verified;
