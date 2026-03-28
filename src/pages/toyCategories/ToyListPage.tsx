import './ToyListPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getToysByCategory } from '../../data/toyData';


interface ToyListPageProps {
  categoryName: string;
  categoryId: number;
  categoryColor: string;
  sampleToys: Toy[];
  ageGroup?: string;
  wishlisted?: number[];
  toggleWishlist?: (id: number) => void;
}

interface Toy {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: number;
  agegroup?: string;
  description?: string;
}

// const ToyListPage = ({ categoryName, categoryId, categoryColor }: ToyListPageProps) => {
//   const navigate = useNavigate();
//   const [wishlisted, setWishlisted] = useState<number[]>([]);


//   // Get toys from the data file based on category ID
//   const sampleToys: Toy[] = getToysByCategory(categoryId);

//   const toysToDisplay = sampleToys || getToysByCategory(categoryId);

const ToyListPage = ({
  categoryName,
  categoryId,
  categoryColor,
  sampleToys,
  wishlisted = [],
  toggleWishlist = () => {}
}: ToyListPageProps) => {
  const navigate = useNavigate();
  // const [wishlisted, setWishlisted] = useState<number[]>([]);

  // Use sampleToys prop if provided, otherwise fallback to categoryId
 const toysToDisplay: Toy[] = sampleToys ?? getToysByCategory(categoryId);
  

  //for add to cart message
 const [cartMessage, setCartMessage] = useState<string | null>(null);

 //for buynow button
const handleBuyNow = (toy: Toy) => {
  navigate('/buynow', { state: { toy } });
};
  


  // const toggleWishlist = (toyId: number) => {

  //   console.log("toggle fn:", toggleWishlist);
  //   if (wishlisted.includes(toyId)) {
  //     setWishlisted(wishlisted.filter(id => id !== toyId));
  //   } else {
  //     setWishlisted([...wishlisted, toyId]);
  //   }
  // };

  return (
    <div className="toy-list-container">
       
       {/* //Add to cart message */}
       {cartMessage && <div className="cart-toast">{cartMessage}</div>}

      <div className="toy-list-header" style={{ backgroundColor: categoryColor + '20', borderBottomColor: categoryColor }}>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>
        <h1 className="toy-list-title">{categoryName}</h1>
        <p className="toy-list-count">({sampleToys.length} products)</p>
      </div>

      <div className="toy-list-content">
        <div className="toys-grid">
            {toysToDisplay.map((toy) => {
            return(
              <div key={toy.id} className="toy-card">
                  <div className="toy-image-container" style={{ position: 'relative' }}>
                    <img src={toy.image} alt={toy.name} className="toy-image" />

                        <button
                                  className="add-to-cart-btn"
                                  style={{ backgroundColor: categoryColor }}
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

                    {/* Wishlist Button */}
                                <button
                                className="wishlist-btn"
                                onClick={() => {toggleWishlist(toy.id);}}
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
                  {/* <button className="add-to-cart-btn" style={{ backgroundColor: categoryColor }}>
                    Add to Cart
                  </button> */}
                  <div className="toy-info">
                    <h3 className="toy-name">{toy.name}</h3>
                    <div className="toy-rating">
                      {'★'.repeat(Math.floor(toy.rating))} ({toy.rating})
                    </div>
                    <p className="toy-price">₹{toy.price.toLocaleString('en-IN')}</p>

                    <button
                      className="buy-now-btn"
                      style={{ backgroundColor: categoryColor }}
                      onClick={() => handleBuyNow(toy)}
                    >
                      Buy Now
                    </button>
                  </div>
              </div>
             );})}
          </div>
      </div>
    </div>
  );
};

export default ToyListPage;
