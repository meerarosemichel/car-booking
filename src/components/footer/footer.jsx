import "./footer.css";

function footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>CarBook</h2>

          <p>
            Book your dream car anytime, anywhere. We provide luxury,
            sports, SUVs, and family cars with affordable pricing and
            excellent customer service.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>

          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@carbook.com</p>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">▶️</a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 CarBook. All Rights Reserved. | Designed by Meera Rose Michel
        </p>
      </div>

    </footer>
  );
}

export default footer;