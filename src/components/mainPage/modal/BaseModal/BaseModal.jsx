import React, { useState } from "react";
import "./basemodal.css";
import close from "../../../../assets/images/mainPageAssets/close.svg";
const BaseModal = ({ poster, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  let modalClass = isOpen ? "open" : "closed";

  return (
    <div className={`modal-overlay  ${modalClass} `}>
      <div className={`modal ${modalClass} flex justify-between gap-2 items-center`}>
        <div className="modal-head flex px-4 py-4 items-center justify-between">
          <span>logo</span>
          <button onClick={onClose} className="modal-closeBtn">
            <img src={close} />
          </button>
        </div>

        <div className="modal-poster flex justify-center items-center">{/* <img src={poster} alt="" /> */}</div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
