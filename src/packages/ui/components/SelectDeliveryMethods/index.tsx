import React, { useState } from 'react';
import {
  Container,
  SelectContainer,
  SelectHeader,
  OptionsList,
  OptionItem,
} from './SelectDeliveryMethodsStyles.styled.ts';
import ArrowDown from '../../../../assets/icons/arrow.png';

interface SelectDeliveryMethodsProps {
  deliveryMethods: string[];
}

const SelectDeliveryMethods: React.FC<SelectDeliveryMethodsProps> = ({ deliveryMethods }) => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<string>(deliveryMethods[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDeliveryMethodClick = (method: string) => {
    setSelectedDeliveryMethod(method);
    setIsDropdownOpen(false); // Fecha o dropdown
  };

  return (
    <Container>
      <SelectContainer>
        <SelectHeader
          onClick={() => setIsDropdownOpen((prev) => !prev)} // Alterna o dropdown
          isDropdownOpen={isDropdownOpen}
          arrow={ArrowDown}
        >
          {selectedDeliveryMethod}
        </SelectHeader>
        {isDropdownOpen && (
          <OptionsList>
            {deliveryMethods.map((method, index) => (
              <OptionItem
                key={index}
                onClick={() => handleDeliveryMethodClick(method)}
              >
                {method}
              </OptionItem>
            ))}
          </OptionsList>
        )}
      </SelectContainer>
    </Container>
  );
};

export default SelectDeliveryMethods;
