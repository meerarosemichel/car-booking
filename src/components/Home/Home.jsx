import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <h4>WELCOME TO CAR BOOKING</h4>

        <h1>
          Find & Book Your <span>Dream Car</span>
        </h1>

        <p>
          Choose from a wide range of luxury, sports, SUV, and family cars.
          Enjoy affordable prices, secure online booking, and 24/7 customer
          support for a smooth travel experience.
        </p>

        <div className="home-buttons">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">View Cars</button>
        </div>

        <div className="home-stats">
          <div>
            <h2>500+</h2>
            <span>Premium Cars</span>
          </div>

          <div>
            <h2>10K+</h2>
            <span>Happy Customers</span>
          </div>

          <div>
            <h2>24/7</h2>
            <span>Customer Support</span>
          </div>
        </div>

      </div>

      <div className="home-image">
        <img src="/public/hero-car.png" alt="Luxury Car" />
      </div>

    </section>
  );
}

export default Home;