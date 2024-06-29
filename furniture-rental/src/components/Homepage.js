import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Make sure to create this CSS file

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">Furniture Rental</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Rent the Best Furniture with Ease</h1>
        <p>High-quality furniture available for rent at affordable prices.</p>
        <Link to="/catalog" className="hero-button">Explore Catalog</Link>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Wide Variety</h3>
            <p>Choose from a wide range of furniture items for every room.</p>
          </div>
          <div className="feature">
            <h3>Affordable Prices</h3>
            <p>Get the best quality furniture at the most affordable prices.</p>
          </div>
          <div className="feature">
            <h3>Flexible Rentals</h3>
            <p>Flexible rental periods to suit your needs.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-container">
          <div className="product">
            <img src="/path/to/image1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$20 / month</p>
          </div>
          <div className="product">
            <img src="/path/to/image2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$30 / month</p>
          </div>
          <div className="product">
            <img src="/path/to/image3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$25 / month</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Great service and fantastic furniture!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"I love the flexibility and the quality of the items."</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Furniture Rental. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
