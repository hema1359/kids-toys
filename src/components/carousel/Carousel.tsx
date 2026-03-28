

//import React from "react";
import "./Carousel.css";
//import banner1 from "/images/Welcomepage2.png";
import banner2 from "/images/softtoys/banner1.png";
import banner3 from "/images/vehicles/banner1.png";
import banner4 from "/images/actiontoys/banner1.png";
import banner5 from "/images/educational/banner1.png";
import banner6 from "/images/outdoor/banner1.png";

const Carousel = () => {
  return (
    <div id="kiddokartCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators mb-0">
        <button type="button" data-bs-target="#kiddokartCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#kiddokartCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#kiddokartCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#kiddokartCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#kiddokartCarousel" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#kiddokartCarousel" data-bs-slide-to="5"></button>
        
        
      </div>

      {/* Slide items */}
      <div className="carousel-inner">
        {/* <div className="carousel-item active carousel-bg">
          <div className="hero-slide carousel-content"> */}

            {/* <div className="home-intro intro-content">
          <h2>Welcome to Kiddokart</h2>
          <h2> Kids Toys Store</h2>          
          <p>Discover a world of joy, imagination, and endless possibilities for your little ones.</p>
        </div> */}
            {/* <div className="hero-text">
              <h1>Welcome to Kiddokart</h1>              
            </div> 
            <div className="hero-image">
              <img src={banner1} className="d-block w-100 banner-img" alt="Banner 1" />
            </div> */}
          {/* </div>
        </div> */}

        <div className="carousel-item active carousel-bg">
          <div className="hero-slide carousel-content">
             <div className="hero-text">
            <h1>Fun &amp; Safe Toys</h1>
              <p>Discover a world of colourful, safe toys that spark imagination and joy.</p>              
            </div> 
            <div className="hero-image">
              <img src={banner2} className="d-block w-100 banner-img" alt="Banner 2" />
            </div>
          </div>
        </div>

        <div className="carousel-item carousel-bg">
          <div className="hero-slide carousel-content">
            <div className="hero-text">
            <h1>Vehicle Fun</h1>
            <p>Let your kids drive their imagination with colorful cars, buses, and trucks made for exciting playtime.</p>
            </div>
            <div className="hero-image">
              <img src={banner3} className="d-block w-100 banner-img" alt="Banner 3" />
            </div>
          </div>
        </div>

        <div className="carousel-item carousel-bg">
          <div className="hero-slide carousel-content">
            <div className="hero-text">
              <h1>Action-Packed Playtime</h1>
              <p>Gear up for action-packed fun with robots, superheroes, and adventure figures your kids will love!</p>
            </div>
            <div className="hero-image">
              <img src={banner4} className="d-block w-100 banner-img" alt="Banner 4" />
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-bg">
          <div className="hero-slide carousel-content">
            <div className="hero-text">
              <h1>Learning Through Play</h1>
              <p>Educational toys that make learning fun for kids of all ages.</p>
            </div>
            <div className="hero-image">
              <img src={banner5} className="d-block w-100 banner-img" alt="Banner 5" />
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-bg">
          <div className="hero-slide carousel-content">
            <div className="hero-text">
              <h1>Outdoor Adventure</h1>
              <p>Gear up for outdoor play with our rugged selection of playsets and bikes.</p>
            </div>
            <div className="hero-image">
              <img src={banner6} className="d-block w-100 banner-img" alt="Banner 6" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#kiddokartCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#kiddokartCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;