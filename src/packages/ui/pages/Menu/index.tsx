import React from 'react';
import CategoryList from '../../components/CategoryList';
import './menu.css';
import bgHeader from './../../../../assets/img/bg-header.jpg'
import logo from './../../../../assets/img/logo.jpeg'

// Definindo as interfaces para os dados
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

interface MenuProps {
  title: string;
  items: string[];
  categories: Category[];
}

// Componente Menu
const Menu: React.FC<MenuProps> = ({ title, items, categories }) => {
  return (
    <div>
      <div className="app-container">
        <div className="image-container">
          <img className="top-image" src={bgHeader} alt="Imagem de topo" />
        </div>
        <div className="content">
          <div className="info-general">
            <div>
              <img className="logo-image" src={logo} alt="Logo" />
            </div>
            <h4>{title}</h4>
          </div>

          {/* <p>Este é o conteúdo da página que começa abaixo da imagem fixa.</p>
          <p>O fundo branco está cobrindo a parte inferior da imagem devido ao border-radius nos cantos superiores.</p> */}


          {/* Mapeando as categorias e exibindo os itens */}
          {/* {categories.map((category, index) => (
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
          ))} */}
          <CategoryList categories={categories} />


        </div>
      </div>
      {/* <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Menu;
