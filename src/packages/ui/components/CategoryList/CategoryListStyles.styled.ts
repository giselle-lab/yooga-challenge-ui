import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin: 20px 0;
`;

export const CategoryTitle = styled.h4`
  margin: 0;
  color: #333;
  text-align: start;
  font-weight: 600;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ItemCard = styled.div`
  width: 45%;
  margin: 15px 0 5px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  border-bottom: 2px solid #dfdfdf;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 120px;
    max-height: 100px;
  }
`;

export const ItemInfo = styled.div`
  text-align: left;
`;

export const ItemName = styled.div`
  font-size: 12px;
  margin: 0px;
  color: #333;
  font-weight: 600;
`;

export const ItemDescription = styled.div`
  font-size: 12px;
  margin: 0px;
  color: #757575;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  color: #777;
  margin-right: 8px;
`;

export const DiscountedPrice = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #444;
  margin-right: 8px;
`;

export const DiscountBadge = styled.span`
  background-color: #b8e5fa;
  font-size: 11px;
  color: #276591;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 12px;
  padding: 5px;
`;

export const ItemPrice = styled.span`
font-size: 12px;
  font-weight: 600;
  color: #444;
  margin-right: 8px;
`;

