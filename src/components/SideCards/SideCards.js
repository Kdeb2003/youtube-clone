// SideCards.js
import React from 'react';
import './SideCards.css';

const SideCards = () => {
  const cardImages = [
    '/images/img4.png',
    '/images/img5.png',
    '/images/img6.png',
    '/images/img7.png',
    '/images/img8.png',
    '/images/img1.png',
    '/images/img2.png',
    '/images/img9.png',
  ];

  return (
    <div className="card-container">
      {cardImages.map((image, index) => (
        <div key={index} className="card">
          <img src={image} alt={`Card ${index + 1}`} className="card-image" />
        </div>
      ))}
    </div>
  );
};

export default SideCards;
