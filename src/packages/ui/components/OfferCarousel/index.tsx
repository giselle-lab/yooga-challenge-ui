import React from 'react';
import styled from 'styled-components';
import { formatNumberCustom } from '../../utils/formatNumberCustom';
import {
  CategoryTitle,
  CarouselContainer,
  OfferCard,
  OfferImage,
  OfferInfo,
  EmptyMessage,
  OriginalPrice,
  DiscountedPrice,
  DiscountBadge,
  ItemPrice,
  ItemName,
} from './OfferCarousel.styled'



interface Discount {
  discountedPrice: number;
  discount: string;
}

interface Item {
  image: string;
  name: string;
  price: number;
  discount?: Discount;
}

interface Category {
  title: string;
  items: Item[];
}

interface OfferCarouselProps {
  categories: Category[];
}

const OfferCarousel: React.FC<OfferCarouselProps> = ({ categories }) => {
  // Filtrar itens com desconto
  const discountedItems = categories
    .flatMap((category) => category.items)
    .filter((item) => item.discount);

  if (discountedItems.length === 0) {
    return <EmptyMessage>Não há produtos em oferta no momento.</EmptyMessage>;
  }

  return (<>
    <CarouselContainer>
      <CategoryTitle>{'Produtos em oferta 💙'}</CategoryTitle>
      <div>
        {discountedItems.map((item, index) => (
          <OfferCard key={index}>
            <OfferImage src={item.image} alt={item.name} />
            <OfferInfo>
              <ItemName>{item.name}</ItemName>
              <div>
                <DiscountedPrice>R${formatNumberCustom(item.discount.discountedPrice, 2)}</DiscountedPrice>
                <OriginalPrice>R${formatNumberCustom(item.price, 2)}</OriginalPrice>
                <DiscountBadge>-{item.discount.discount}</DiscountBadge>
              </div>

            </OfferInfo>

          </OfferCard>
        ))}
      </div>
    </CarouselContainer>
  </>
  );
};

export default OfferCarousel;
