import React, { useState, useEffect } from "react";
import Contact from "../../../assets/images/Contact.svg";
import "./contactForm.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import LoadingButton from "../../loadingButton/LoadingButton";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("https://websitebuilderbackend-production-716e.up.railway.app/message", {
        name,
        email,
        message,
      });
      setResponseMessage(response.data.message);
      setError(null);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="main_page_contactForm container mx-auto my-4 px-4 py-4 flex flex-col justify-center md:flex-row md:justify-between items-center min-h-screen gap-8">
      <div data-aos="fade-right" data-aos-duration="1000" className="Contact_img mb-4 md:mb-0 w-full hidden md:block">
        <img src={Contact} alt="Contact" />
      </div>

      <div className="Contact_info md:ml-10 w-full">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="text-5xl font-bold mb-8 text-center">
          {t("CONTACT.TTIEL")}
        </h1>

        <div className="Contact_form" id="contact-us">
          {responseMessage && <div className="text-green-600 text-center mb-4">{responseMessage}</div>}
          {error && <div className="text-red-600 text-center mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-lg mb-2 font-bold text-gray-500">
              {t("CONTACT.EMIAL")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black shadow-md border border-gray-200 rounded py-2 px-4 block w-full mb-2 focus:outline-none focus:bg-white focus:border-purple-500"
              required
            />

            <label htmlFor="name" className="block text-lg mb-2 font-bold text-gray-500">
              {t("CONTACT.NAME")}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black shadow-md border border-gray-200 rounded py-2 px-4 block w-full mb-2 focus:outline-none focus:bg-white focus:border-purple-500"
              required
            />

            <label htmlFor="message" className="block text-lg mb-2 font-bold text-gray-500">
              {t("CONTACT.NAME")}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-black shadow-md border border-gray-200 rounded py-2 px-4 block w-full mb-2 h-32 resize-none focus:outline-none focus:bg-white focus:border-purple-500"
              required
            ></textarea>

            <LoadingButton
              loading={isLoading}
              type="submit"
              className="Contact_btn hover:bg-purple-600 text-white font-bold w-full py-2 px-4 mt-8 rounded focus:outline-none focus:shadow-outline"
              btnText={t("CONTACT.SEND")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
