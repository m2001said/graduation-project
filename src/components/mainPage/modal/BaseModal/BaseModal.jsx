import React, { useState } from "react";
import "./basemodal.css";

const BaseModal = ({ poster, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  let modalClass = isOpen ? "open" : "closed";

  return (
    <div className="modal-overlay">
      <div className={`modal ${modalClass} flex justify-between gap-2`}>
        <div className="modal-head flex px-2 justify-between">
          <span>logo</span>
          <span>close</span>
        </div>

        <div className="poster">
          <img src={poster} alt="" />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
