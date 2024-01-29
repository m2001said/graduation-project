import React, { useState } from "react";
import "./basemodal.css";
import close from "../../../../assets/images/mainPageAssets/close.svg";
import logo from "../../../../assets/images/mainPageAssets/logo.svg";

const BaseModal = ({ poster, children, toggleModal }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    toggleModal();
  };

  let modalClass = isOpen ? "open" : "closed";

  return (
    <div className={`modal-overlay  ${modalClass} `}>
      <div className={`Basemodal ${modalClass} flex justify-between  gap-2 items-center`}>
        <div className="modal-head flex px-4 py-4 justify-between">
          <div className="main-logo flex items-center">
            <img src={logo} alt="" />
            <span>WEB</span>
          </div>{" "}
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
