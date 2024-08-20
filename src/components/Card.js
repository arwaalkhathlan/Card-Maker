import React from 'react';
import '../styles/Card.css';

const Card = ({ card, onCardClick, selectedCardId }) => {
  const isSelected = selectedCardId === card.id;

  return (
    <div
      id={`card${card.id}`}
      className={`card ${isSelected ? 'selected' : ''}`}
      style={{ backgroundImage: `url(${card.backgroundImage})` }}
      onClick={() => onCardClick(card.id)}
    >

    </div>
  );
};

export default Card;
