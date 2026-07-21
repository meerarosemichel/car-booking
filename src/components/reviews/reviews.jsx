import "./reviews.css";

function Reviews() {
  return (
    <section className="reviews" id="reviews">

      <div className="reviews-heading">
        <span>Testimonials</span>
        <h2>What Our Customers Say</h2>
        <p>
          We are proud to serve thousands of happy customers across the
          country. Here's what they have to say about our car booking service.
        </p>
      </div>

      <div className="reviews-container">

        <div className="review-card">

          <div className="quote">❝</div>

          <p>
            Booking a car was incredibly easy. The vehicle was clean,
            comfortable, and delivered on time. I highly recommend this
            service to everyone.
          </p>

          <div className="stars">
            ⭐⭐⭐⭐
          </div>

          <div className="customer">
            <img src="/public/user1.png" alt="Customer" />

            <div>
              <h3>Rahul Sharma</h3>
              <span>Software Engineer</span>
            </div>
          </div>

        </div>

        <div className="review-card">

          <div className="quote">❝</div>

          <p>
            Excellent customer support and affordable prices. The booking
            process was smooth and I will definitely use this service again.
          </p>

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <div className="customer">
            <img src="/public/user2.png" alt="Customer" />

            <div>
              <h3>Priya Verma</h3>
              <span>Business Woman</span>
            </div>
          </div>

        </div>

        <div className="review-card">

          <div className="quote">❝</div>

          <p>
            Premium cars with excellent maintenance. The driving experience
            was amazing and the online booking took only a few minutes.
          </p>

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <div className="customer">
            <img src="/public/user3.png" alt="Customer" />

            <div>
              <h3>Arjun Patel</h3>
              <span>Entrepreneur</span>
            </div>
          </div>

        </div>
        <div className="review-card">

          <div className="quote">❝</div>

          <p>
            Premium cars with excellent maintenance. The driving experience
            was amazing and the online booking took only a few minutes.
          </p>

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <div className="customer">
            <img src="/public/user4.png" alt="Customer" />

            <div>
              <h3>Meera </h3>
              <span>Professor</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Reviews;