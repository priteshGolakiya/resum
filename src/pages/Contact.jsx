import React, { useState } from "react";
import "../styles/contact/Contact.css";

const Contact = () => {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const switchTheme = (e) => {
    document.documentElement.setAttribute(
      "data-theme",
      e.target.checked ? "dark" : "light"
    );
    setTheme(e.target.checked ? "dark" : "light");
  };

  const validate = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError("Your name should be at least 3 characters long.");
      return;
    }

    if (!(email.includes(".") && email.includes("@"))) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!emailIsValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.length < 15) {
      setError("Please write a longer message.");
      return;
    }

    setError("");
    setSuccessMsg("Thank you! I will get back to you as soon as possible.");

    // Show the popup message
    window.alert("Thank you for Contacting Us");

    // Reset the form after a delay
    setTimeout(() => {
      setSuccessMsg("");
      // Reset the form
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={`contact-container ${theme}`}>
      <div className="left-col">
        <img
          className="logo"
          src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
          alt="Logo"
        />
      </div>

      <div className="right-col">
        {/* <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={switchTheme} />
            <div className="slider round"></div>
          </label>
          <div className="description">Dark Mode</div>
        </div> */}

        <h1>Contact us</h1>
        <p>
          Planning to visit Indonesia soon? Get insider tips on where to go,
          things to do and find the best deals for your next adventure.
        </p>

        <form id="contact-form" onSubmit={validate}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Your Message"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" id="submit" name="submit">
            Send
          </button>
        </form>

        <div id="error">{error}</div>
        <div id="success-msg">{successMsg}</div>
      </div>
    </div>
  );
};

export default Contact;
