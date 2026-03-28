import Header from '../../components/header/Header';

import Footer from '../../components/footer/Footer';
import ToyListPage from '../../pages/toyCategories/ToyListPage';

import type { Toy } from '../../data/toyData';

type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};
const OutdoorToysPage: React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Outdoor Toys" 
        categoryId={4}
        categoryColor="#95E1D3"
        sampleToys={toys.filter(toy => toy.category === 4)}
        wishlisted={wishlisted}              // ✅ ADD
        toggleWishlist={toggleWishlist}
      />
      <Footer />
    </>
  );
};

export default OutdoorToysPage;
