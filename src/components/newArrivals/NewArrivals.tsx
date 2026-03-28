
import "./NewArrivals.css";

import { useNavigate } from "react-router-dom";
import { toyData } from "../../data/toyData";
import { useState } from "react";

import type { Toy } from "../../data/toyData";

type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};


const NewArrivals: React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  const newArrivalToys = toys.filter(toy => toy.isNewArrival);

    const navigate = useNavigate();
      
      const handleBuyNow = (toy: Toy) => {
      navigate('/buynow', { state: { toy } });
    };

    //for add to cart message
     const [cartMessage, setCartMessage] = useState<string | null>(null);
    

  return (
    <div className="new-arrivals-container">
       {/* //Add to cart message */}
       {cartMessage && <div className="cart-toast">{cartMessage}</div>}

      <h2> 🆕 New Arrivals</h2>
      <div className="toy-cards">
        {newArrivalToys.map((toy) => (
          <div className="toy-card" key={toy.id}>
          <div className="toy-image-container">
            <img src={toy.image} alt={toy.name} className="toy-image" />
            <button
                className="add-to-cart-btn"
                style={{ backgroundColor: "#efef6d" }}
                onClick={() => {
                  // Show toast with this toy’s name
                  setCartMessage(`${toy.name} added to cart!`);

                  // Hide toast after 2 seconds
                  setTimeout(() => setCartMessage(null), 2000);
                }}
              >
            Add to Cart
           
          </button>
          </div>
          <h3 className="toy-name">{toy.name}</h3>
          <p className="toy-price">₹{toy.price}</p>
          <p className="toy-description">{toy.description}</p>

                
          {/* ❤️ Wishlist Button */}
            <button
              className="wishlist-btn"
              onClick={() => toggleWishlist(toy.id)}
            >
              <i
                className={
                  wishlisted.includes(toy.id)
                    ? "bi bi-heart-fill"
                    : "bi bi-heart"
                }
              ></i>

              <span className="wishlist-tooltip">
                {wishlisted.includes(toy.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"}
              </span>
              </button>
            <button className="buy-now-btn" onClick={() => handleBuyNow(toy)}>
              Buy Now
            </button>

        </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;