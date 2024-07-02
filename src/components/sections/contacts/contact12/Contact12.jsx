import React from "react";
import "./contact12.css";
import msgIcon from "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855279/msg-icon_admjx1.png";
import emailIcon from "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855301/mail-icon_cfnj5m.png";
import phoneIcon from "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855333/phone-icon_ct28v1.png";
import locationIcon from "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855417/location-icon_ytfm0b.png";
import whiteArrow from "https://res.cloudinary.com/di8kjrflu/image/upload/v1719855189/white-arrow_bmhias.png";

const Contact12 = ({ template }) => {
  const contact = template.contact;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e74231fe-1368-4d44-b502-76b0e8aee615");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log(data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact12 container12">
      {/* ------------------------Contact Left  */}
      <div className="contact-col12">
        <h3>
          Send us a message <img src={msgIcon} alt="msg" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we
          strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={emailIcon} alt="icons" />
            Contact@edusite.dev
          </li>
          <li>
            {" "}
            <img src={phoneIcon} alt="icons" />
            +1 123-456-7890
          </li>
          <li>
            {" "}
            <img src={locationIcon} alt="icons" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>

      {/* ------------------------Contact Right  */}

      <div className="contact-col12">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name " required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Write your message here..!</label>
          <textarea name="message" rows="6" placeholder="Enter your message..!" required></textarea>
          <button type="submit" className="btn12 dark-btn12">
            Submit Now
            <img src={whiteArrow} alt="arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact12;
