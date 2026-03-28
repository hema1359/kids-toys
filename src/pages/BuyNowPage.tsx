import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BuyNowPage.css"; // ✅ Make sure this file exists in SAME folder

interface Toy {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
  category?: number;
  agegroup?: string;
  description?: string;
}

const BuyNowPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const toy = location.state?.toy;

  const [quantity, setQuantity] = useState<number>(1);

  if (!toy) {
    return <p className="no-product">No product selected</p>;
  }

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handlePlaceOrder = () => {
    // alert(`Order placed for ${toy.name}, Quantity: ${quantity}`);
    navigate("/order-summary", { state: { toy, quantity, total: toy.price * quantity } });
  };

  return (
    <div className="buy-now-page">
      <div className="buy-container">

        {/* LEFT SIDE IMAGE */}
        <div className="left-section">
          <img src={toy.image} alt={toy.name} />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="right-section">
          <h2>{toy.name}</h2>
          <p className="price">₹{toy.price.toLocaleString("en-IN")}</p>

          <p className="description">
            {toy.description || "A fun and safe toy for kids. Perfect for learning and play!"}
          </p>

          {/* Quantity */}
          <div className="quantity-selector">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          {/* Total */}
          <p className="total-price">
            Total: ₹{(toy.price * quantity).toLocaleString("en-IN")}
          </p>

          {/* Buy Now Button */}
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Buy Now
          </button>

          <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        </div>
      </div>
    </div>

  );
};
export default BuyNowPage