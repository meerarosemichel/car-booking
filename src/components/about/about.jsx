import "./about.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src="/public/car2.png" alt="About Car Booking" />
      </div>

      <div className="about-content">

        <span>ABOUT US</span>

        <h2>
          Your Trusted <span>Car Booking</span> Partner
        </h2>

        <p>
          We provide premium car rental services with a wide collection of
          luxury, sports, SUVs, and family vehicles. Our goal is to make every
          journey safe, comfortable, and affordable through a simple online
          booking experience.
        </p>

        <div className="about-features">

          <div className="feature">
            ✔ Luxury & Premium Cars
          </div>

          <div className="feature">
            ✔ Affordable Daily Rentals
          </div>

          <div className="feature">
            ✔ 24/7 Customer Support
          </div>

          <div className="feature">
            ✔ Easy Online Booking
          </div>

        </div>

        <div className="about-stats">

          <div className="stat-box">
            <h3>500+</h3>
            <p>Cars Available</p>
          </div>

          <div className="stat-box">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="stat-box">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>

        </div>

        <button className="about-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default About;