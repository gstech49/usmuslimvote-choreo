import "./Contact.css";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a1f4c39e-e091-489a-878f-7514bffeeda7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <FaMessage />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback questions and suggestions are
          important to us as we strive to provide exceptional service to our
          community
        </p>
        <ul>
          <li>
            <MdEmail />
            contact@themuslimvote.us
          </li>
          <li>
            <FaPhoneVolume /> +1001123545
          </li>
          <li>
            <FaAddressCard />
            Texas USA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
