import React from "react";
import "./basemodal.css";
import close from "../../../../assets/images/mainPageAssets/close.svg";
import logo from "../../../../assets/images/mainPageAssets/logo.svg";

const BaseModal = ({ poster, children }) => {
  const onClose = () => {
    document.querySelectorAll(".modal-overlay").forEach((el) => {
      el.classList.add("closed");
    });
  };

  return (
    <div className="modal-overlay closed">
      <div className={`Basemodal flex justify-between  gap-2 items-center`}>
        <div className="modal-head flex px-4 py-4 justify-between">
          <div className="main-logo flex items-center">
            <img src={logo} alt="logo" />
            <span>WEB</span>
          </div>
          <button onClick={onClose} className="modal-closeBtn">
            <img src={close} alt="close-icon" />
          </button>
        </div>
        <div className="modal-poster flex justify-center items-center">
          <img src={poster} alt="modal-poster" />
        </div>
        <div className="modal-content flex justify-between">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
