import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

//   const handlePlaceOrder = () => {
//      alert(`Your Order Successfully Placed it will be reached in a few days!!!!`);
//     navigate("/");
//   };
  const { toy, quantity, total } = location.state || {};

  const [showSuccess, setShowSuccess] = useState(false);

  if (!toy) {
    return <p>No order found</p>;
  }

  //add magic effect
  const handleConfirm = () => {
    setShowSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);

     // 🔊 Play sound effect
    const audio = new Audio("/sounds/orderplacedmp3.mp3");
    audio.play();

    setTimeout(() => {
      navigate("/");
    }, 3000);
  
  };

  
  return (
    <div className="summary-page">
      <div className="summary-card">
        <h2>Order Summary</h2>

        <img src={toy.image} alt={toy.name} />

        <h3>{toy.name}</h3>
        <p>Price: ₹{toy.price}</p>
        <p>Quantity: {quantity}</p>
        <p className="total">Total: ₹{total}</p>

        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Order
        </button>

        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      {/* MAGIC SUCCESS POPUP */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="magic-box">
            <h1>🎉 Order Placed Successfully!</h1>
            <div className="sparkles"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

