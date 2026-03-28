import Header from '../../components/header/Header';
//import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import type { Toy } from '../../data/toyData';
import { toyData } from '../../data/toyData';
import ToyListPage from '../toyCategories/ToyListPage';
import "../../components/toyCategory/ToyCategory.css";


type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};

const Toddler: React.FC<Props> = ({  wishlisted, toggleWishlist }) => {
  const toddlerToys: Toy[] = toyData.filter(
    (toy: Toy) => toy.ageGroup === 'toddler'
  );
  return (
    <>
      <Header />
      
      <ToyListPage
        categoryName="Toddler Toys"
        categoryId={0}             // not used for age filtering
        categoryColor="#FF6B9D"
        sampleToys={toddlerToys}   // <-- pass filtered toys
        wishlisted={wishlisted}          // ✅ pass wishlist state
        toggleWishlist={toggleWishlist}
        
      />
      <Footer />
    </>
  );
};

export default Toddler;
