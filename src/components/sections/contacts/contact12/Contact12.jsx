import React from "react";
import "./contact12.css";
import { useSelector } from "react-redux";

const Contact12 = ({ template }) => {
  const ownContact = useSelector((state) => state.ownTemplate.contact);
  const contact = template ? template.contact : ownContact;
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
    <div className="contact12 container12 " id={contact.sectionId}>
      {/* ------------------------Contact Left  */}
      <div className="contact-col12">
        <h3>
          {contact.title}
          <img src={contact.icon} alt="msg" className="icon-msg12" />
        </h3>
        <p>{contact.description}</p>
        <ul>
          {contact.contacts.map((contactItem, index) => (
            <li key={index}>
              <img src={contactItem.icon} alt="icons" className="icon12" />
              {contactItem.text}
            </li>
          ))}
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
            <img src={contact.imgUrl} alt="arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact12;
