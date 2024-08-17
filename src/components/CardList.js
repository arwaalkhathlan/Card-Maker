import React from 'react';
import Card from './Card';

const CardList = ({ cards, onCardClick, selectedCardId }) => {
  return (
    <div className="container">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          onCardClick={onCardClick}
          selectedCardId={selectedCardId}
        />
      ))}
    </div>
  );
};

export default CardList;
