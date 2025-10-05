// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;

