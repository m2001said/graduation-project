import React, { useState, useEffect } from "react";
import "./big-loader.css";
import { useTranslation } from "react-i18next";

const BigLoader = ({ lineLoadTime }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const sentences =
    language === "ar"
      ? [
          "إنشاء محتوى الذكاء الاصطناعي بناءً على مدخلاتك.",
          "إنشاء واختيار أفضل الصور.",
          "اختيار النصوص والصور الأكثر صلة.",
          "تخصيص الصور والتخطيط.",
          "تحسين النصوص والصور للحصول على أفضل أداء.",
          "إتمام الإعداد.",
          "مراجعة وتحسين موقعك على الويب.",
        ]
      : [
          "Generating AI content based on your input.",
          "Creating and selecting the best images.",
          "Choosing the most relevant text and images.",
          "Customizing images and layout.",
          "Optimizing text and images for best performance.",
          "Finalizing the setup.",
          "Reviewing and optimizing your website.",
        ];

  const [status, setStatus] = useState(Array(sentences.length).fill("loading"));

  useEffect(() => {
    const interval = lineLoadTime;
    const timers = sentences.slice(0, -1).map((_, index) =>
      setTimeout(() => {
        setStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[index] = "done";
          return newStatus;
        });
      }, (index + 1) * interval)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [sentences.length]);

  return (
    <div className="loader-container">
      {sentences.map((sentence, index) => (
        <div key={index} className="loader-row">
          <div className={`loader-check ${status[index]}`}>
            {status[index] === "loading" ? <div className="loader-spinner"></div> : <div className="loader-checkmark">&#10003;</div>}
          </div>
          <div className={`loader-sentence ${status[index]}`}>{sentence}</div>
        </div>
      ))}
    </div>
  );
};

export default BigLoader;
