import React, { useState } from "react";
import Contact from "../../../assets/images/Contact.svg";
import "./contactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

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

  return (
    <div className="main_page_contactForm container mx-auto my-4 px-4 py-4 flex flex-col justify-center md:flex-row md:justify-between items-center min-h-screen">
      <div className="Contact_img mb-4 md:mb-0 w-full hidden md:block">
        <img src={Contact} alt="Contact" />
      </div>

      <div className="Contact_info md:ml-10 w-full">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="Contact_form">
          {responseMessage && <div className="text-green-600 text-center mb-4">{responseMessage}</div>}
          {error && <div className="text-red-600 text-center mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-lg mb-2 font-bold text-gray-500">
              Email
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
              Name
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
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-black shadow-md border border-gray-200 rounded py-2 px-4 block w-full mb-2 h-32 resize-none focus:outline-none focus:bg-white focus:border-purple-500"
              required
            ></textarea>

            <button
              type="submit"
              className="Contact_btn hover:bg-purple-600 text-white font-bold w-full py-2 px-4 mt-8 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading ? (
                <>
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
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
