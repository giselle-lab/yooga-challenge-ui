import React from 'react';
import { CategoryList, SelectDeliveryMethods, OfferCarousel } from '../../components';
import { 
    AppContainer, 
    ImageContainer, 
    TopImage, 
    Content, 
    InfoGeneral, 
    LogoImage, 
    InfoGeneralTexts, 
    InfoDelivery, 
    Cupons, 
    GiftIcon, 
    CouponText,
    CarouselContainer
} from './MenuStyles.styled.ts';
import bgHeader from './../../../../assets/img/bg-header.jpg';
import logo from './../../../../assets/img/logo.jpg';
import giftIcon from './../../../../assets/icons/gift.png';
import { isOpen, WorkingHours } from '../../utils/workingHours';
import { formatNumberCustom } from '../../utils/formatNumberCustom';
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
  const statusColor = status === "Aberto" ? "green" : "red";

  return (
    <AppContainer>
      <ImageContainer>
        <TopImage src={bgHeader} alt="Imagem de topo" />
      </ImageContainer>
      <Content>
        <InfoGeneral>
          <LogoImage src={logo} alt="Logo" />
          <InfoGeneralTexts>
            <h4>{storeInfos[0].storeName} -  {storeInfos[0].storeLocation}</h4>
            <h5>
              {storeInfos[0].storeType} • {storeInfos[0].distance} km • Min. R$ {formatNumberCustom(storeInfos[0].minimumOrderValue, 2)}
            </h5>
          </InfoGeneralTexts>
        </InfoGeneral>

        <InfoDelivery>
          <SelectDeliveryMethods deliveryMethods={storeInfos[0].deliveryMethods} />
          <h5>
            {getStoreStatus(storeInfos[0].workingHours)}, {storeInfos[0].estimatedDeliveryTime} min • <span style={{ color: statusColor }}>{status === "Aberto" ? "Aberto" : "Fechado"}</span>
          </h5>
        </InfoDelivery>

        <Cupons>
          <GiftIcon src={giftIcon} alt="Gift Icon" />
          <CouponText>{storeInfos[0].coupons[0].description}</CouponText>
        </Cupons>
        <CarouselContainer>
        <OfferCarousel categories={categories} />
        </CarouselContainer>
        <CategoryList categories={categories} />
      </Content>
    </AppContainer>
  );
};

export default Menu;
