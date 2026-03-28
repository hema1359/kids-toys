import { useNavigate } from 'react-router-dom';
import './AgeCategory.css';

interface AgeGroup {
  id: number;
  label: string;
  ageRange: string;
  color: string;
  icon?: string;
  image?: string;
  path: string;
}

const AgeCategory = () => {

  const navigate = useNavigate();
  const ageGroups: AgeGroup[] = [
    {
      id: 1,
      label: 'Newborn Babies',
      ageRange: '0-1month',
      color: '#FF6B9D',
      //icon: '🍼',
      image: '/images/avatar/j1.jpg',
      path: '/age/newborn'
    },
    {
      id: 2,
      label: 'Infants',
      ageRange: '1-1 Year',
      color: '#4ECDC4',
      //icon: '🧩',
      image: '/images/avatar/j2.jpg',
      path: '/age/infant'

    },
    {
      id: 3,
      label: 'Toddlers',
      ageRange: '1-3 Years',
      color: '#FFE66D',
      //icon: '🎮',
      image: '/images/avatar/j3.jpg',
      path: '/age/toddler'
    },
    {
      id: 4,
      label: 'Pre-School Kids',
      ageRange: '3-5 Years',
      color: '#3e97f0',
      //icon: '🎮',
      image: '/images/avatar/j4.jpg',
      path: '/age/pre-schooler'
    },
    {
      id: 5,
      label: 'Children',
      ageRange: '6-12 Years',
      color: '#d60a96',
      //icon: '🎮',
      image: '/images/avatar/j5.jpg',
      path: '/age/children'
    },
  ];

  return (
    <div className="age-category-container">
      <h2 className="age-category-title">Shop by Age</h2>
      <div className="circles-wrapper">
        {ageGroups.map((group) => (
          <div key={group.id} className="age-item-card"
            onClick={() => navigate(group.path)}>
            <div className="age-circle">
              {group.image ? (
                <img src={group.image} alt={group.label} className="age-image" />
              ) : (
                <div className="circle-content" style={{ backgroundColor: group.color }}>
                  {/* <div className="circle-icon">{group.icon}</div> */}
                </div>
              )}
            </div>
            <div className="age-details">
              <h3 className="circle-label">{group.label}</h3>
              <p className="circle-age-range">{group.ageRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeCategory;
