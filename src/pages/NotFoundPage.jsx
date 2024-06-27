import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="mt-2 text-6xl font-extrabold text-gray-900  dark:text-gray-100">404</h1>
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900  dark:text-gray-100"> {t("ERROR.MESSAGE_1")}</h2>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400"> {t("ERROR.MESSAGE_2")}</p>
      </div>
      <div className="mt-6">
        <Link
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          to={`/${i18n.language}`}
        >
          {t("ERROR.GO_BACK")}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
