import React, { useState } from "react";
import "./basemodal.css";

const BaseModal = ({ poster, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  let modalClass = isOpen ? "open" : "closed";

  return (
    <div className={`modal ${modalClass}`}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default BaseModal;
