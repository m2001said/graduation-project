import React from "react";

const LoginForm = ({ toggleForm, handleSignIn }) => (
  <>
    <h1>تسجيل الدخول</h1>
    <div className="modal-form">
      <label htmlFor="email">البريد الالكتروني</label>
      <input type="email" id="email" />
      <label htmlFor="password">الرقم السري</label>
      <input type="password" id="password" />
      <div className="message-error"></div>
      <button className="form-button" onClick={handleSignIn}>
        تسجيل الدخول
      </button>
      <div className="sub-button">
        <span> ليس لديك حساب؟ </span>
        <button onClick={toggleForm}>انشاء الحساب</button>
      </div>
    </div>
  </>
);

export default LoginForm;
