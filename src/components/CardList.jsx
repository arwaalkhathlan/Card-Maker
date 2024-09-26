import React from "react";
import Card from "./Card";

const CardList = ({ cards, onCardClick, selectedCardId }) => {
  return (
    <div className=" container">
      <div className="row">
        {cards.map((card) => (
          <div
            key={card.id}
            className="col-12 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <Card
              card={card}
              onCardClick={onCardClick}
              selectedCardId={selectedCardId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
