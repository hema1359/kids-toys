import React from "react";
import toyimage from "/images/newlogo.png";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* About */}
        <div className="footer-column">
          <div className="kiddo-logo">
            <img src={toyimage} alt="Kiddokart Logo" />
          </div>
          <p>
            Kiddokart is your happy toy store for kids. Discover fun toys,
            educational games, and exciting gifts for every age.
          </p>
        </div>

        {/* Customer Service */}
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping Info</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Toy Categories</h3>
          <ul>
            <li>Soft Toys 🧸</li>
            <li>Remote Cars 🚗</li>
            <li>Action Figures 🦸</li>
            <li>Educational Toys 📚</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>📍 Tamil Nadu, India</li>          
            <li>📞 +91 98765 43210</li>
            <li>🌐 www.kiddokart.com</li>
            <li>📧 support@kiddokart.com</li>
            <li>☎️ 24/7 Customer Support</li>
          </ul>

          <div className="social-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
               <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Kiddokart | Designed for Kids with ❤️
      </div>

    </footer>
  );
};

export default Footer;