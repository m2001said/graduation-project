import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import Modal from "../components/mainPage/modal/Modal.jsx";
import posterImage from "../assets/images/mainPageAssets/signin.svg";
import BaseModal from "../components/mainPage/modal/BaseModal/BaseModal.jsx";

const MainPage = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Steps /> */}
      {/* <Modal type={"sign-in"} posterImage={posterImage} /> */}
      <BaseModal poster={posterImage}>
        <h1>انشاء حساب</h1>
        <div className="modal-form">
          <label htmlFor="newEmail">البريد الالكتروني</label>
          <input type="email" id="newEmail" />
          <label htmlFor="newPassword">الرقم السري</label>
          <input type="password" id="newPassword" />
          <div className="message-error"></div>
          <button className="form-button">انشاء الحساب</button>
          <div className="sub-button">
            <span>لديك حساب بالفعل ؟</span>
            <button>تسجيل الدخول</button>
          </div>
        </div>
      </BaseModal>
    </>
  );
};
export default MainPage;
