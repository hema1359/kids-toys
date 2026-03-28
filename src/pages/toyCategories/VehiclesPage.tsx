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
const VehiclesPage: React.FC<Props> = ({
  toys,
  wishlisted,
  toggleWishlist,
}) => {
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Vehicles" 
        categoryId={5}
        categoryColor="#F38181"
        sampleToys={toys.filter(toy => toy.category === 5)}
        wishlisted={wishlisted}              // ✅ ADD
        toggleWishlist={toggleWishlist} 
      />
      <Footer />
    </>
  );
};

export default VehiclesPage;
