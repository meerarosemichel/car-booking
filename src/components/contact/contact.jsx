import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <span>CONTACT US</span>
        <h2>Get In Touch With Us</h2>
        <p>
          Have questions or need help booking a car? We'd love to hear from you.
          Fill out the form below and our team will contact you shortly.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>123 Car Street, Chennai, Tamil Nadu, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@carbooking.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Sunday : 24/7 Service</p>
          </div>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <input
              type="tel"
              placeholder="Enter Your Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;