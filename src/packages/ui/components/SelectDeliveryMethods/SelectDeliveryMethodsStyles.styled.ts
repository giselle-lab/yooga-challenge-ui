import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 150px;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectHeader = styled.div<{ isDropdownOpen: boolean; arrow: string }>`
  background-color: white;
  color: #333;
  padding: 8px 17px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background-image: url(${(props) => props.arrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    right: 10px; /* Espaço à direita */
    transform: ${(props) => (props.isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
`;

export const OptionItem = styled.li`
  padding: 8px 17px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;
