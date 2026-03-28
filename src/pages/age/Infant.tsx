import Header from '../../components/header/Header';
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
const Infant: React.FC<Props> = ({  wishlisted, toggleWishlist }) => {
  const newbornToys: Toy[] = toyData.filter(
    (toy: Toy) => toy.ageGroup === 'newborn'
  );
  return (
    <>
      <Header />
      <ToyListPage
        categoryName="Infant Toys"
        categoryId={0}             // not used for age filtering
        categoryColor="#FF6B9D"
        sampleToys={newbornToys}   // <-- pass filtered toys
        wishlisted={wishlisted}          // ✅ pass wishlist state
        toggleWishlist={toggleWishlist}
      />
      <Footer />
    </>
  );
};

export default Infant;