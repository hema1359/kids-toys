
import Header from "../../components/header/Header";
import toyimage from "/images/newlogo.png";
import './Contact.css';



function Contact() {
  return (
    <div className="contact-container-fluid">
  
    <Header />
    <div className="contact-content">

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Contact Us</h1>
      <p style={{ textAlign: "center", fontSize: "20px" }}>If you have any questions or inquiries, please feel free to reach out to us!</p>

      <div className="contact-top ">
      {/* About */}
        <div className="contact-column">
          <div className="kiddo-logo">
            <img src={toyimage} alt="Kiddokart Logo" />
          </div>
          <div>
            <p>Kiddokart is your happy toy store for kids. Discover fun toys, educational games, and exciting gifts for every age.</p>
          </div>
        </div>
      {/* Contact */}
        <div className="contact-column">
        <ul>
            <li>📍 Tamil Nadu, India</li>
            <li>📞 +91 98765 43210</li>
            <li>🌐 www.kiddokart.com</li>
            <li>📧 support@kiddokart.com</li>
            <li>☎️ 24/7 Customer Support</li>
          </ul>
        </div>         
          <div className="social-icons">
          
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
      </div>
  );
}        
export default Contact;