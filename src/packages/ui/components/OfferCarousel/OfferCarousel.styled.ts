import styled from "styled-components";

export const CategoryTitle = styled.h4`
  margin: 0;
  color: #333;
  text-align: start;
  margin-bottom:15px;
  /* font-size: 1.5rem; */
`;
export const CarouselContainer = styled.div`
  /* max-width: 90%; Limita o tamanho do contêiner ao tamanho da viewport */
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  /* padding: 16px; */
  scroll-behavior: smooth;
  margin: 40px 0 50px;
  /* position: absolute; */

  /* Estilização opcional para remover a barra de rolagem visível */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OfferCard = styled.div`
  display: inline-block;
  background: #f9f9f9;
  /* border: 1px solid #ddd; */
  border-radius: 8px;
  margin-right: 16px;
  width: 160px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }
`;

export const OfferImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
`;

export const OfferInfo = styled.div`
  /* padding: 8px 12px; */
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const EmptyMessage = styled.p`
  padding: 16px;
  text-align: center;
  font-size: 1rem;
  color: #555;
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  color: #777;
  margin-right: 8px;
`;

export const DiscountedPrice = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #444;
  margin-right: 8px;
`;

export const DiscountBadge = styled.span`
  background-color: #b8e5fa;
  font-size: 11px;
  color: #276591;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 12px;
  padding: 5px;
  /* font-size: 0.8rem; */
`;

export const ItemPrice = styled.span`
font-size: 12px;
  font-weight: bold;
  color: #444;
  margin-right: 8px;
`;

export const ItemName = styled.h5`
  margin: 0px;
  color: #333;
  font-weight: 600;
`;