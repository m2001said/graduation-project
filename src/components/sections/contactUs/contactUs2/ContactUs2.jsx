import React from "react";
import "./contactus2.css";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import { useSelector } from "react-redux";

const ContactUs2 = () => {
  const form = useRef();
  const { contact } = useSelector((state) => state.template2);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm("service_rbyx6tj", "service_rbyx6tj", form.current, "0QLQxh2eNcWa-5vs2").then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  // };

  return (
    <div id="contactUs2">
      <h5 className="text-light">Get in Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contactUs2__container">
        <div id="contactUs2" className="contactUs2__options">
          {contact.options.map((option, index) => (
            <article className="contactUs2__option" key={index}>
              <img src={option.logo} alt={`${option.title} Logo`} className="contactUs2__option-logo" />
              <h4>{option.title}</h4>
              <h5>{option.subtitle}</h5>
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>

        {/* End of ContactUs2 */}

        <form ref={form} className="form_2" onSubmit={"sendEmail"}>
          {/* <form ref={form} onSubmit={sendEmail}> */}
          <input className="input_2" type="text" name="name" placeholder="Your Full Name" required />
          <input className="input_2" type="email" name="email" placeholder="Your email " required />
          <textarea name="message" placeholder="Your Message" rows="7" required className="txt_2"></textarea>
          <button type="submit" className="btn2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;
