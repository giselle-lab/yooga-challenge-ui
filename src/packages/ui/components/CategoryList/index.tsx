import React from 'react';
import {
  CategoryContainer,
  CategoryTitle,
  ItemsContainer,
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemDescription,
  ItemPrice,
  DiscountedPrice,
  OriginalPrice,
  DiscountBadge,
} from './CategoryListStyles.styled.ts';
import { truncateText } from '../../utils/truncateText.ts';
import { formatNumberCustom } from '../../utils/formatNumberCustom.ts';

interface Discount {
  discountedPrice: string;
  percentage: string;
}

// Interfaces para definir a estrutura das categorias e itens
interface Item {
  image: string;
  name: string;
  description: string;
  price: string;
  discount?: Discount;
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
        <CategoryContainer key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <ItemsContainer>
            {category.items.map((item, itemIndex) => (
              <ItemCard key={itemIndex}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemDescription>{truncateText(item.description,90)}</ItemDescription>
                  {item.discount ? (
                    <div>
                      <DiscountedPrice>R${formatNumberCustom(item.discount.discountedPrice,2)}</DiscountedPrice>
                      <OriginalPrice>R${formatNumberCustom(item.price,2)}</OriginalPrice>
                      <DiscountBadge>-{item.discount.discount}</DiscountBadge>
                    </div>
                  ) : (
                    <ItemPrice>R$ {formatNumberCustom(item.price,2)}</ItemPrice>
                  )}
                </ItemInfo>
              </ItemCard>
            ))}
          </ItemsContainer>
        </CategoryContainer>
      ))}
    </div>
  );
};

export default CategoryList;
