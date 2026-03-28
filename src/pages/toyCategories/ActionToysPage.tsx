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
const ActionToysPage: React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Action Toys" 
        categoryId={1}
        categoryColor="#FF6B6B"
        sampleToys={toys.filter(toy => toy.category === 1)}
        wishlisted={wishlisted}              // ✅ ADD
        toggleWishlist={toggleWishlist}     
      />
      <Footer />
    </>
  );
};

export default ActionToysPage;
