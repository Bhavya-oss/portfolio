import React, { useContext, useState } from "react";
import "./Contact.css";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MyContext } from "../../App";

function Contact() {
  const { contactRef } = useContext(MyContext);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [message, setMessage] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    console.log("form data", formData);

    const fullName = formData.get("fullName").trim();
    const email = formData.get("email").trim();

    console.log("email is", email);

    // if (email === "") {
    //   setMessage("Please enter an email address.");
    //   setIsEmailSent(false);
    //   return;
    // }

    function validateEmail(email) {
      // console.log("email validation", emailRegex.test(email));

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      return emailRegex.test(email);
    }
    if (!validateEmail(email)) {
      setMessage("Enter valid email");
      setIsEmailSent(false);
      return;
    }

    if (fullName === "" || email === "") {
      setMessage("Please fill out all required fields before submitting.");
      setIsEmailSent(false);
      setTimeout(() => {
        setMessage(" ");
      }, 3000);
      return;
    }

    formData.append("access_key", "c212b130-3656-4c28-bd36-e2a0e949a790");
    const object = Object.fromEntries(formData);

    console.log("Object data", formData);
    const json = JSON.stringify(object);
    console.log("json data", json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "Application/json",
        },
        body: json,
      }).then((res) => res.json());
      if (res.success && form !== "") {
        console.log("Result", res);
        setIsEmailSent(res.success);
        setMessage(res.message);
        setTimeout(() => setMessage(""), 3000);
        form.reset();
      } else {
      }
    } catch (error) {
      // setMessage("Not submited the form");
      console.log("Error while submitting the form", error);
    }
  };
  return (
    <div ref={contactRef} className="contact">
      <div className="title-box">
        <h2>Get in touch</h2>
        <img
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="logo"
        />
      </div>
      <div className="contact-section">
        <div className="contact-text">
          <h3>Let's talk</h3>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <CgMail />
              <p>bhavyads1234@gmail.com</p>
            </div>
            <div className="contact-detail">
              <MdOutlinePhone />
              <p>+91 9110459387</p>
            </div>
            <div className="contact-detail">
              <MdLocationOn />

              <p>Bengaluru</p>
            </div>
          </div>
        </div>
        <div className="submit-btutton">
          {" "}
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            // required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            // required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={8}
          ></textarea>
          <div className="submit-btutton">
            {" "}
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </div>
        </form>
      </div>
      <p className={isEmailSent ? "success-message" : "failur-message"}>
        {message}
      </p>
    </div>
  );
}

export default Contact;
