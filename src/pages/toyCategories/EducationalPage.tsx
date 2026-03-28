import Header from '../../components/header/Header';
//import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ToyListPage from '../../pages/toyCategories/ToyListPage';

import type { Toy } from '../../data/toyData';

type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};
const EducationalPage: React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Educational" 
        categoryId={2}
        categoryColor="#4ECDC4"
        sampleToys={toys.filter(toy => toy.category === 2)}
         wishlisted={wishlisted}              // ✅ ADD
        toggleWishlist={toggleWishlist}  
      />
      <Footer />
    </>
  );
};

export default EducationalPage;
