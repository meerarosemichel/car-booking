import "./gallery.css";

function gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-title">
        <h4>OUR COLLECTION</h4>
        <h2>Featured Cars</h2>
        <p>
          Explore our premium collection of luxury, sports, SUV, and family
          cars available for rent at affordable prices.
        </p>
      </div>

      <div className="gallery-container">

        <div className="car-card">
          <img src="car1.png" alt="BMW" />

          <div className="car-info">
            <h3>BMW M4</h3>
            <p>₹5,500 / Day</p>
            <button>Book Now</button>
          </div>
        </div>

        <div className="car-card">
          <img src="car2.png" alt="Audi" />

          <div className="car-info">
            <h3>Audi A6</h3>
            <p>₹4,800 / Day</p>
            <button>Book Now</button>
          </div>
        </div>

        <div className="car-card">
          <img src="car3.png" alt="Mercedes" />

          <div className="car-info">
            <h3>Mercedes C-Class</h3>
            <p>₹6,000 / Day</p>
            <button>Book Now</button>
          </div>
        </div>

        <div className="car-card">
          <img src="car4.png" alt="Range Rover" />

          <div className="car-info">
            <h3>Range Rover</h3>
            <p>₹7,000 / Day</p>
            <button>Book Now</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default gallery;