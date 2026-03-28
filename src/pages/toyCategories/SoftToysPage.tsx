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
const SoftToysPage : React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Soft Toys" 
        categoryId={3}
        categoryColor="#FFE66D"
        sampleToys={toys.filter(toy => toy.category === 3)}
        wishlisted={wishlisted}              // ✅ ADD
        toggleWishlist={toggleWishlist}
      />
      <Footer />
    </>
  );
};

export default SoftToysPage;
