import React, { useState } from "react";
import "../Css/Links.css"; // Import the CSS file for styling
import contact from "../Image/register.jpg";
const Links = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values using the state variables (name, email, message)
    // Example: send data to an API, display a success message, etc.
    // Reset the form after submission if needed
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact__form">
      <section>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="form-heading">Contact Us</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="form-input"
              id="message"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section>
        <img src={contact} alt="" height={500} width={500} />
      </section>
    </div>
  );
};

export default Links;
