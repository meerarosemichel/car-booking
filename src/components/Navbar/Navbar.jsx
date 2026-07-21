import "./Navbar.css";

function Navbar() {
  return (
    <nav className="sidebar">

      <div className="logo">
        <h2>Car<span>Book</span></h2>
      </div>

      <ul className="menu">
        <li><a href="#home">🏠 Home</a></li>
        <li><a href="#gallery">🚗 Gallery</a></li>
        <li><a href="#reviews">⭐ Reviews</a></li>
        <li><a href="#about">ℹ️ About</a></li>
        <li><a href="#contact">📞 Contact</a></li>
      </ul>

      <button className="book-btn">Book Now</button>

    </nav>
  );
}

export default Navbar;