import React from "react";

const SignUpForm = ({ toggleForm }) => (
  <>
    <h1>انشاء حساب</h1>
    <div className="modal-form">
      <label htmlFor="newEmail">البريد الالكتروني</label>
      <input type="email" id="newEmail" />
      <label htmlFor="newPassword">الرقم السري</label>
      <input type="password" id="newPassword" />
      <div className="message-error"></div>
      <button className="form-button">انشاء الحساب</button>
      <div className="sub-button">
        <span> لديك حساب بالفعل ؟ </span>
        <button onClick={toggleForm}>تسجيل الدخول</button>
      </div>
    </div>
  </>
);

export default SignUpForm;
