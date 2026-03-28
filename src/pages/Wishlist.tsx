import React from "react";
import type { Toy } from "../data/toyData";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";

import "./Wishlist.css";
type WishlistProps = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};




const Wishlist: React.FC<WishlistProps> = ({toys, wishlisted,toggleWishlist,}) => {

const navigate = useNavigate();

const wishlistToys = toys?.filter((toy) =>
  wishlisted.includes(toy.id)
) || [];


const handleBuyNow = (toy: Toy) => {
  navigate("/buynow", { state: { toy } });
};
console.log("wishlist toys:", wishlistToys);
  return (

   
    <div className="toy-list-container">
         <Header />
    
      <div className="toy-list-header">
        <h2 className="toy-list-title">My Wishlist ❤️</h2>
        <p className="toy-list-count">
          {wishlistToys.length} items
        </p>
      </div>

      <div className="toy-list-content">
        {wishlistToys.length === 0 ? (
          <p>No items in wishlist 😢</p>
        ) : (
          <div className="toys-grid">
            {wishlistToys.map((toy) => (
              <div key={toy.id} className="toy-card">

                <div className="toy-image-container">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="toy-image"
                  />
                </div>

                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(toy.id)}
                >
                  <i className="bi bi-heart-fill"></i>
                </button>

                <div className="toy-info">
                  <h4 className="toy-name">{toy.name}</h4>
                  <p className="toy-price">₹{toy.price}</p>

                  <button
                    className="buy-now-btn"
                    onClick={() => handleBuyNow(toy)}
                >  Buy Now
                </button>
                </div>

                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

