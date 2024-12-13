import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden
`;
  
export const ImageContainer = styled.div`
/* position: absolute; */
width: 100%;
height: 25vh;
overflow: hidden;
`;

export const TopImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const Content = styled.div`
position: absolute;
top: 23vh;
background-color: white;
border-radius: 16px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
padding: 16px;
`;

export const InfoGeneral = styled.div`
display: flex;
align-items: center;
margin-bottom: 16px;
`;

export const LogoImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
margin-right: 16px;
`;

export const InfoGeneralTexts = styled.div`
text-align: start;
h4 {
  color: #333;
  font-weight: 600;
  margin: 0;
}
h5 {
  font-size: 12px;
  color: #757575;
  margin: 4px 0 0;
  font-weight: 400;
}
`;

export const InfoDelivery = styled.div`
margin-bottom: 16px;
display: flex;
gap: 20px;
align-items: center;
h5 {
  font-size: 12px;
  font-weight: 400;
  color: #757575;
  margin: 4px 0;
}
`;

export const Cupons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: #def4ff;
  padding: 2px 6px;
  border-radius: 12px;
  padding: 5px;
`;

export const GiftIcon = styled.img`
width: 15px;
height: 14px;
margin-right: 8px;
`;

export const CouponText = styled.div`
  margin: 0px;
  font-weight: 600;
  color: #277691;
  font-size: 12px;
  
`;

export const CarouselContainer = styled.div`
  width: 90vw;

`;

export const Divisoria = styled.div`
  border-bottom: 2px solid #dfdfdf;
  margin: 30px 0 30px;
`
