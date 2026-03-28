import './ToyCategory.css';
import { useNavigate } from 'react-router-dom';

interface ToyCategory {
  id: number;
  name: string;
  description: string;
  color: string;
  icon?: string;
  image?: string;
  path?: string;
}

const ToyCategory = () => {
  const navigate = useNavigate();

  const toyCategories: ToyCategory[] = [
    {
      id: 1,
      name: 'Action Toys',
      description: 'Adventure & Fun',
      color: '#FF6B6B',
      image: '/images/actiontoys/12.jpg',
      path: '/action-toys'
    },
    {
      id: 2,
      name: 'Educational',
      description: 'Learn & Grow',
      color: '#4ECDC4',
      image: '/images/educational/1.jpg',
      path: '/educational'
    },
    {
      id: 3,
      name: 'Soft Toys',
      description: 'Cuddles & Comfort',
      color: '#FFE66D',
      image: '/images/softtoys/1.jpg',
      path: '/soft-toys'
    },
    {
      id: 4,
      name: 'Outdoor Toys',
      description: 'Play & Explore',
      color: '#95E1D3',
      image: '/images/outdoor/1.jpg',
      path: '/outdoor-toys'
    },
    {
      id: 5,
      name: 'Vehicles',
      description: 'Speed & Movement',
      color: '#F38181',
      image: '/images/vehicles/1.jpg',
      path: '/vehicles'
    }
  ];

  const handleExploreClick = (categoryPath: string) => {
    navigate(categoryPath);
  };

  return (
    <div className="toy-category-container">
      <h2 className="toy-category-title">Shop by Toy Category</h2>
      <p className="toy-category-subtitle">Explore our wide range of toys for every interest</p>
      <div className="toy-categories-grid">
        {toyCategories.map((category) => (
          <div
            key={category.id}
            className="toy-category-card"
            style={{ borderTopColor: category.color }}
          >
            <div className="toy-category-image-container">
              <img
                src={category.image}
                alt={category.name}
                className="toy-category-image"
              />
              <div
                className="toy-category-overlay"
                style={{ backgroundColor: category.color }}
              ></div>
            </div>
            <div className="toy-category-content">
              <h3 className="toy-category-name">{category.name}</h3>
              <p className="toy-category-description">{category.description}</p>
              <button 
                className="toy-category-btn" 
                style={{ borderColor: category.color }}
                onClick={() => handleExploreClick(category.path || '/')}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCategory;
