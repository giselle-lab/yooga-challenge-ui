import React, { useState } from 'react';
import './SelectDeliveryMethods.css';

interface SelectDeliveryMethodsProps {
  deliveryMethods: string[];
}

const SelectDeliveryMethods: React.FC<SelectDeliveryMethodsProps> = ({ deliveryMethods }) => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<string>(deliveryMethods[0]);

  const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeliveryMethod(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="delivery-method" className="label">
        Escolha o método de entrega:
      </label>
      <select
        id="delivery-method"
        className="select"
        value={selectedDeliveryMethod}
        onChange={handleDeliveryMethodChange}
      >
        {deliveryMethods.map((method, index) => (
          <option key={index} value={method}>
            {method}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDeliveryMethods;
