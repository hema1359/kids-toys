import Header from '../../components/header/Header';

import Carousel from '../../components/carousel/Carousel';
import AgeCategory from '../../components/ageCategory/AgeCategory';
import ToyCategory from '../../components/toyCategory/ToyCategory';
import Footer from '../../components/footer/Footer';
import './Home.css';
import Tittle from '../../components/tittle/Tittle';
import NewArrivals from '../../components/newArrivals/NewArrivals';
//import About from '../about/About';
import type { Toy } from "../../data/toyData";

type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};
const Home: React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  return (
    <div className="home-container">
      <Header />
      <Tittle />
           
      {/* <section className="home-intro">
        <div className="intro-content">
          <h2>Welcome to Kiddokart Kids Toys Store</h2>
          <p>Your one-stop shop for quality toys that inspire learning, creativity, and fun!</p>
        </div>
      </section> */}
       <Carousel /> 
      <ToyCategory />
      <AgeCategory />
      <NewArrivals
        toys={toys}
        wishlisted={wishlisted}
        toggleWishlist={toggleWishlist}
      />
      <section>
      <div className="why-container">
            <h2>✨ Why Choose Us?</h2>

            <div className="why-cards">

              <div className="why-card">
                <div className="icon safe">🛡️</div>
                <h3>100% Safe Toys</h3>
                <p>All toys are safety tested and child-friendly</p>
              </div>

              <div className="why-card">
                <div className="icon delivery">🚚</div>
                <h3>Fast Delivery</h3>
                <p>Quick delivery right to your doorstep</p>
              </div>

              <div className="why-card">
                <div className="icon price">💰</div>
                <h3>Best Prices</h3>
                <p>Affordable prices with great discounts</p>
              </div>

              <div className="why-card">
                <div className="icon support">🎧</div>
                <h3>24/7 Support</h3>
                <p>We’re always here to help you</p>
              </div>

            </div>
            
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default Home;
