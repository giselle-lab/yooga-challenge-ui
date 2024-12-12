import React from 'react';
import './categoryList.css';

// Interfaces para definir a estrutura das categorias e itens
interface Item {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface Category {
  title: string;
  items: Item[];
}

// Props do componente
interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.title}</h3>
          <div className="items-container">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="item-card">
                <img className="item-image" src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
