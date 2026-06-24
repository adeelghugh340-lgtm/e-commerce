import React from "react";
const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <h2 className="title">📞 Contact Us</h2>
      <p className="subtitle">We are here to help you anytime</p>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h3>🏏 Cricket Store</h3>

          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Email:</strong> support@cricketstore.com</p>
          <p><strong>Address:</strong> Shahodi Garhi, Punjab, Pakistan</p>

          <div className="social">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>WhatsApp</span>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </section>
  );
};

export default Contact;