import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ToyListPage from '../toyCategories/ToyListPage';
import type { Toy } from '../../data/toyData';
import { toyData } from '../../data/toyData';
import { useParams } from 'react-router-dom';

const AgePage = () => {
 
  const { age } = useParams<{ age: string }>();
  
  // Filter toys by ageGroup
  // const ageToys: Toy[] = toyData.filter(toy => toy.ageGroup === age);

const ageToys: Toy[] = toyData.filter(
  (toy) => toy.ageGroup?.toLowerCase() === age?.toLowerCase()
);

   // Optional: assign colors per age group
  const ageColors: { [key: string]: string } = {
    newborn: '#FF6B9D',
    infant: '#4ECDC4',
    toddler: '#FFE66D',
    preschooler: '#3e97f0',
    children: '#d60a96'
  };
  return (
    <>
      <Header />
      <ToyListPage
        categoryName={age ? age.charAt(0).toUpperCase() + age.slice(1) + ' Toys' : 'Age Toys'}
        categoryId={0}
        categoryColor={age !== undefined ? ageColors[age] : '#FF6B6B'}
        sampleToys={ageToys}
      />
      <Footer />
    </>
  );
};

export default AgePage;