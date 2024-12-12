import React from 'react';
import { CategoryList, SelectDeliveryMethods } from '../../components';
import './menu.css';
import bgHeader from './../../../../assets/img/bg-header.jpg'
import logo from './../../../../assets/img/logo.jpg'
import giftIcon from './../../../../assets/icons/gift.png'
import { isOpen, WorkingHours } from '../../utils/workingHours'
import { formatNumberCustom } from '../../utils/formatNumberCustom'
import { getStoreStatus } from '../../utils/getStoreStatus';



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

interface StoreInfo {
  storeName: string;
  storeLocation: string;
  storeType: string;
  distance: number;
  minimumOrderValue: number;
  workingHours: WorkingHours;
  estimatedDeliveryTime: string;
  deliveryMethods: string[];
  coupons: string[];
}

interface MenuProps {
  storeInfos: StoreInfo[];
  items: string[];
  categories: Category[];
}

// Componente Menu
const Menu: React.FC<MenuProps> = ({ storeInfos, items, categories }) => {
  const status = isOpen(storeInfos[0].workingHours);
  // Definir a cor do status (verde para "Aberto", vermelho para "Fechado")
  const statusColor = status === "Aberto" ? "green" : "red";

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
            <div className="info-general-texts">
              <h4>{storeInfos[0].storeName} -  {storeInfos[0].storeLocation}</h4>
              <h5>{storeInfos[0].storeType} • {storeInfos[0].distance} km • Min. R$ {formatNumberCustom(storeInfos[0].minimumOrderValue, 2)}</h5>
            </div>
          </div>
          <div className='info-delivery'>
            <SelectDeliveryMethods deliveryMethods={storeInfos[0].deliveryMethods} />

            <h5>
              {getStoreStatus(storeInfos[0].workingHours)}, {storeInfos[0].estimatedDeliveryTime} min • <span style={{ color: statusColor }}>
                {status === "Aberto" ? "Aberto" : "Fechado"}
              </span>
            </h5>
          </div>

          <div className='cupons'>
            {/* #276591 */}
            <img className="gift-icon" src={giftIcon} alt="" />
            <h5 className='cupom-text' >{storeInfos[0].coupons[0].description}</h5>
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
