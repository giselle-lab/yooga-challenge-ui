import React, { useState } from 'react';
import {
  Container,
  Select,
  Option,
} from './SelectDeliveryMethodsStyles.styled.ts';

interface SelectDeliveryMethodsProps {
  deliveryMethods: string[];
}

const SelectDeliveryMethods: React.FC<SelectDeliveryMethodsProps> = ({ deliveryMethods }) => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<string>(deliveryMethods[0]);

  const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeliveryMethod(event.target.value);
  };

  return (
    <Container>
      <Select
        id="delivery-method"
        value={selectedDeliveryMethod}
        onChange={handleDeliveryMethodChange}
      >
        {deliveryMethods.map((method, index) => (
          <Option key={index} value={method}>
            {method}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectDeliveryMethods;
