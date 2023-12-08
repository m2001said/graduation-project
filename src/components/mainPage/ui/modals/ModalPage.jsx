import React from "react";
import "./modalPage.css";
import { Link } from "react-router-dom";
const ModalPage = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-A">
                <div className="modal-A-imageBackground-1">
                     <div className="modal-A-imageBackground-1-zag-web-builder">
                        <p>Zag Web Builder</p>
                      </div>
                </div>
                <div className="modal-A-imageBackground-2"></div>
          <div className="modal-A-content">
                  <div>
                     <button type="button" className="modal-A-content-btn-close" onClick={onClose}>
                     <span className="modal-A-content-btn-close-icon">X</span>
                     </button>
                  </div>
              <div className="modal-A-text-1">
                <p>
                  Create your website quickly with the
                  <br /> artificial intelligence.
                </p>
                <p className="modal-A-text-2">
                  Write an overview of your project idea in 3 lines
                </p>
                    <div className="inputs">
                      <textarea placeholder="website overview" className="inputs-textArea"/>
                            <div>
                                <button className="inputs-btns">
                                  <Link to={"dashboard"} >Open DashBoard</Link>
                                </button>

                                <button className="inputs-btns" >
                                  <Link to={"trialDesign"} >Open TrialDesign</Link>
                                </button>
                            </div>
                    </div>
              </div>
        </div>
      </div>
    </div>
  );
};
export default ModalPage;
