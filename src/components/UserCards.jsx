import React from "react";
import { useAuth } from "../context/AuthContext.js";

const UserCards = ({ cards }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <p>No user information available.</p>;
  }

  return (
    <div className="UserCards container mt-5">
      <h2 className="text-center mb-4">Your Cards</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
