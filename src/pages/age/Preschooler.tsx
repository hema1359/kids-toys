import Header from '../../components/header/Header';
//import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ToyListPage from '../toyCategories/ToyListPage';
import type { Toy } from '../../data/toyData';
import { toyData } from '../../data/toyData';

type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};
const Preschooler: React.FC<Props> = ({  wishlisted, toggleWishlist }) => {
  const preschoolerToys : Toy[] = toyData.filter(
    (toy: Toy) => toy.ageGroup === 'preschooler'
  );
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Pre-Schooler Toys" 
        categoryId={1}
        categoryColor="#FF6B6B"
        sampleToys={preschoolerToys}   // <-- pass filtered toys
        wishlisted={wishlisted}          // ✅ pass wishlist state
        toggleWishlist={toggleWishlist}
      />
      <Footer />
    </>
  );
};

export default Preschooler;
