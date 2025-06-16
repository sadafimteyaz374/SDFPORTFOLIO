import React from "react";
import './contact.css';

function Contact() {
  return (
    <div className="body">
      <div className="contain">
        <h2>Contact Me</h2>
        <p>You can reach out to me through this form or via email.</p>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        
        <div className="opt">
          <p><strong>Email :</strong> <a href="mailto:sadafimteyaz97@gmail.com">sadafimteyaz97@gmail.com</a></p>
          <p><strong>Phone no :</strong> <a href="tel:+919142581206">9142581206</a></p>
          <p><strong>LinkedIn :</strong> <a href="https://linkedin.com/in/sadaf-imteyaz-a6659a27a" target="_blank" rel="noopener noreferrer">linkedin.com/in/sadaf-imteyaz-a6659a27a</a></p>
          <p><strong>GitHub :</strong> <a href="https://github.com/sadafimteyaz374" target="_blank" rel="noopener noreferrer">github.com/sadafimteyaz374</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
