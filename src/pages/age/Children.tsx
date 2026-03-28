import Header from '../../components/header/Header';
//import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ToyListPage from '../../pages/toyCategories/ToyListPage';
import type { Toy } from '../../data/toyData';
import { toyData } from '../../data/toyData';


type Props = {
  toys: Toy[];
  wishlisted: number[];
  toggleWishlist: (id: number) => void;
};
const Children: React.FC<Props> = ({  wishlisted, toggleWishlist }) => {
  const childrenToys : Toy[] = toyData.filter(
    (toy: Toy) => toy.ageGroup === 'children' 
   
  );
   console.log(childrenToys);
  return (
    <>
      <Header />
      
      <ToyListPage 
        categoryName="Children Toys" 
        categoryId={0}
        categoryColor="#FF6B6B"
        sampleToys={childrenToys}   // <-- pass filtered toys
        ageGroup="children"
        wishlisted={wishlisted}          // ✅ pass wishlist state
        toggleWishlist={toggleWishlist}
      />
      <Footer />
    </>
  );
};

export default Children;
