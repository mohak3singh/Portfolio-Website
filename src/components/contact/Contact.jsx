import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fxynngm",
        "template_f8z3llr",
        form.current,
        "k5VFExShOZ3cTtzh8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();  
  };

  return (
    <section id="contact">
      <h5 className="about__heading2">Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>ms13engineer@gmail.com</h5>
            <a href="mailto:mohak03singh@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            required
          />
          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary send__btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
