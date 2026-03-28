

import Header from '../../components/header/Header';

import './Services.css';
import Footer from '../../components/footer/Footer';

function Services() {
  return (
    <div className="services-container">

    <Header />  
        <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="bi bi-shield-check"></i>
            <h3>Safe & Certified</h3>
            <p>All toys are safety tested and certified for children</p>
          </div>
          <div className="feature-card">
            <i className="bi bi-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery to your doorstep</p>
          </div>
          <div className="feature-card">
            <i className="bi bi-wallet2"></i>
            <h3>Best Prices</h3>
            <p>Competitive pricing with regular discounts</p>
          </div>
          <div className="feature-card">
            <i className="bi bi-headset"></i>
            <h3>Customer Support</h3>
            <p>24/7 customer support for your queries</p>
          </div>
        </div>
      </section>
      <Footer/>
      </div>

  );
}   

export default Services;