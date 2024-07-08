import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync } from "../../../features/auth/authSlice";
import { validate } from "./validationUtils";
import Verified from "./Verified";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SignUpForm = ({ toggleForm }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [createSuccess, setCreateSuccess] = useState(false);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const handleSignUp = async () => {
    const validationError = validate("createAccount", name, email, password);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    await dispatch(registerUserAsync({ name, email, password }));
    setCreateSuccess(true);
  };

  // Clear form fields when createSuccess changes
  useEffect(() => {
    if (createSuccess) {
      setName("");
      setEmail("");
      setPassword("");
    }
  }, [createSuccess]);

  return (
    <>
      {createSuccess ? (
        <Verified toggleForm={toggleForm} />
      ) : (
        <>
          <h1>{t("USER.CREATE_ACCOUNT")}</h1>
          <div className="modal-form">
            <label htmlFor="newName">{t("USER.NAME")}</label>
            <input type="text" id="newName" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="newEmail">{t("USER.EMAIL")}</label>
            <input type="email" id="newEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="newPassword">{t("USER.PASSWORD")}</label>
            <input type="password" id="newPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="message-error"></div>
            {errorMessage && <p className="message-error">{errorMessage}</p>}

            <button className={`form-button`} onClick={handleSignUp} disabled={status === "loading"}>
              {status === "loading" && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {t("USER.CREATE_ACCOUNT")}
            </button>
            <div className="sub-button">
              <span> {t("USER.HAVE_ACCOUNT")} </span>
              <button onClick={toggleForm}> {t("USER.LOGIN")}</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpForm;
