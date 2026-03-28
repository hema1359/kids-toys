
import { Link } from "react-router-dom";
import toyimage from "/images/newlogo.png";
import './Header.css';
import { useState } from "react";
import { GiBearFace } from "react-icons/gi";

function Header() 
{  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
     return (
    <header className="kiddo-header mb-4">

    {/* <div className="kiddo-topbar">
      <div className="kiddo-topbar__left">Call us: +1 (800) 555-1234</div>
      <div className="kiddo-topbar__right">Mon–Fri: 9am–6pm</div>
    </div> */}
<div className="kiddo-alert">
    {/* <div className="kiddo-alert" aria-hidden={false}> */}
      <div className="kiddo-alert__inner" role="status" aria-live="polite">
        <span className="kiddo-alert__text">💥 Flash Sale Alert! 🛍️ Up to 60% OFF ✨ Limited Time Only !!!!🎊</span>
      </div>
    </div> 
    
            
    <div className="kiddo-navbar  d-flex justify-content-between align-items-center">

      <div className="kiddo-logo">
        <img src={toyimage} alt="Kiddokart Logo" />
      </div>

      <div className="kiddo-search">
        <input type="text" placeholder="Search Toys..." />
      </div>

          <div className="kiddo-links">
              <nav>
                    <ul className="nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link px-3">
                          Home
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link to="/toyscategories" className="nav-link px-3">
                          Toys Categories
                        </Link>
                      </li>*/}


                      <li className="nav-item  dropdown">
                        <Link to="/" className="nav-link px-3"> 
                        Toys Categories
                        </Link>
                        {/* <button
                            // className={`dropdown-toggle ${isOpen ? 'show' : ''}`}
                            // type="button"
                            // onClick={toggleDropdown}
                          >
                        {/* <i className="fas fa-caret-down"></i> }
                           
                        </button> */}
                      <ul className={`dropdown-menu category-list ${isOpen ? 'show' : ''}`} >
                        <li>
                          <Link
                            to="/action-toys"
                            className="dropdown-item"
                          ><i className="fa-solid fa-robot"></i>
                            Action Toys
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/educational"
                            className="dropdown-item"
                          ><i className="fa-sharp fa-solid fa-puzzle-piece"></i>
                            Educational Toys
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/soft-toys"
                            className="dropdown-item"
                          > <GiBearFace size={20} className="category-list " color="#ff6f61" />
                            Soft Toys
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/outdoor-toys"
                            className="dropdown-item"
                          ><i className="fa-solid fa-futbol"></i>
                            Outdoor Toys
                          </Link>
                        </li>

                      <li>
                        <Link
                          to="/vehicles"
                          className="dropdown-item"
                        ><i className="fa-duotone fa-solid fa-car"></i>
                          Vehicle Toys
                        </Link>
                      </li>
              </ul>
            </li>
            

                        {/* <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option value=""> Toy Category</option>
                            <option value="ActionToysPage">Action Toys</option>
                            <option value="EducationalPage">Educational Toys</option>
                            <option value="SoftToysPage">Soft Toys</option>
                            <option value="OutdoorToysPage">Outdoor Toys</option>
                            <option value="VehiclesPage">Vehicles</option>
                         </select> */}
                      
                      <li className="nav-item">
                        <Link to="/About" className="nav-link px-3">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link px-3">
                          Contact
                        </Link>
                      </li>
                      
                    </ul>

                    
                  </nav>
                </div>
            <div>
                  <div className="kiddo-icons">
                    <Link to="/wishlist" className="nav-link px-3">
                      <i className="wishname"><b>❤️My Wishlist </b></i>
                    </Link>
                    <Link to="/login" className="nav-link px-3">
                      <i className="fas fa-user">Login</i>
                    </Link>
                  </div>
            </div>
 </div>


</header>
  
  

     
  );
}

export default Header;
