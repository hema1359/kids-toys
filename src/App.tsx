import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ActionToysPage from './pages/toyCategories/ActionToysPage'
import EducationalPage from './pages/toyCategories/EducationalPage'
import SoftToysPage from './pages/toyCategories/SoftToysPage'
import OutdoorToysPage from './pages/toyCategories/OutdoorToysPage'
import VehiclesPage from './pages/toyCategories/VehiclesPage'
import Login from './pages/login/login'
import Signup from './pages/signup/Signup'
import BuyNowPage from './pages/BuyNowPage'

import Newborn from './pages/age/Newborn'
import Infant from './pages/age/Infant'
import Children from './pages/age/Children'
import Toddler from './pages/age/Toddler'
import Preschooler from './pages/age/Preschooler'

import AgePage from './pages/age/AgePage'
import OrderSummary from './pages/OrderSummary'

import Wishlist from './pages/Wishlist'
import { useState } from 'react'
import { toyData } from "./data/toyData";


function App() {
 
  const [wishlisted, setWishlisted] = useState<number[]>([]);


const toggleWishlist = (id: number) => {
 
  setWishlisted((prev) => {
    const updated = prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id];

   
    return updated;
  });
};



  return (
    <Routes>
      <Route path="/" element={<Home
  toys={toyData}
  wishlisted={wishlisted}
  toggleWishlist={toggleWishlist}
/>} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      // Toy Routes 
      <Route path="/action-toys" element={<ActionToysPage
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>}/>

      <Route path="/educational" element={<EducationalPage 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />

      <Route path="/soft-toys" element={<SoftToysPage 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />

      <Route path="/outdoor-toys" element={<OutdoorToysPage
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />

      <Route path="/vehicles" element={<VehiclesPage 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />  

      
      // Age Routes

     <Route path="/age/:age" element={<AgePage />} />
console.log("AGE PAGE WORKING");
      <Route path="/age/newborn" element={<Newborn
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} /> 

      <Route path="/age/infant" element={<Infant 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />

      <Route path="/age/toddler" element={<Toddler 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />

      <Route path="/age/pre-schooler" element={<Preschooler 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />
              
      <Route path="/age/children" element={<Children 
              toys={toyData}
              wishlisted={wishlisted}
              toggleWishlist={toggleWishlist}/>} />
console.log("AGE PAGE WORKING");

     
      <Route path="/order-summary" element={<OrderSummary />} />


      <Route path="/buynow" element={<BuyNowPage />} />
      <Route path="/wishlist" element={
        <Wishlist 
        toys={toyData}
        wishlisted={wishlisted}
        toggleWishlist={toggleWishlist}
        />
  }
/>
    </Routes>
  )
}

export default App
