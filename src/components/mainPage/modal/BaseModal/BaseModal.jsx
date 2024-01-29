import React, { useState } from "react";
import "./basemodal.css";
import close from "../../../../assets/images/mainPageAssets/close.svg";
import logo from "../../../../assets/images/mainPageAssets/logo.svg";

const BaseModal = ({ poster, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  let modalClass = isOpen ? "open" : "closed";

  return (
    <div className={`modal-overlay  ${modalClass} `}>
      <div className={`Basemodal ${modalClass} flex justify-between gap-2 items-center`}>
        <div className="modal-head flex px-4 py-4 justify-between">
          <img src={logo} alt="logo" className="main-logo-modal" />
          <button onClick={onClose} className="modal-closeBtn">
            <img src={close} />
          </button>
        </div>

        <div className="modal-poster flex justify-center items-center">
          <img src={poster} alt="" />
        </div>
        <div className="modal-content flex justify-between">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
