import React from 'react';

interface MenuProps {
  title: string;
  items: string[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
