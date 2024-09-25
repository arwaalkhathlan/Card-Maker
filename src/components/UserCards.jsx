import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import Card from "./Card.jsx";

const UserCard = () => {
  const { currentUser } = useAuth();
  const [userCards, setUserCards] = useState([]);
  const [defaultCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null); // Track selected card by ID

  const fetchUserCards = useCallback(async () => {
    if (!currentUser) return;

    try {
      const q = query(
        collection(db, "cards"),
        where("userId", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const fetchedUserCards = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          backgroundImage: data.backgroundImageUrl,
          text: data.text || "",
          textPosition: data.textPosition || { x: 50, y: 50 },
        };
      });
      setUserCards(fetchedUserCards);
      setAllCards([...defaultCards, ...fetchedUserCards]);
    } catch (error) {
      console.error("Error fetching user cards:", error);
    }
  }, [currentUser, defaultCards]);

  const downloadCard = (card) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    // Add cross-origin attribute for CORS
    img.crossOrigin = "anonymous";

    // Set the image source
    img.src = card.backgroundImage;

    img.onload = () => {
      // Set canvas dimensions based on the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Add text on the card
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(card.text, card.textPosition.x, card.textPosition.y);

      // Generate the image from the canvas and trigger download
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${card.id}.png`;
      link.click();
    };

    img.onerror = () => {
      console.error("Error loading the image.");
      alert(
        "Failed to load the image for download. This may be due to cross-origin restrictions."
      );
    };
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  const downloadCardDirect = (card) => {
    const link = document.createElement("a");
    link.href = card.backgroundImage; // Direct download
    link.download = `${card.id}.png`; // Default name
    link.click();
  };

  const selectedCard = userCards.find((card) => card.id === selectedCardId);

  useEffect(() => {
    if (currentUser) {
      fetchUserCards();
    }
  }, [currentUser, fetchUserCards]);

  return (
    <div>
      <div className="row justify-content-center">
        {allCards.map((card) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center"
            key={card.id}
          >
            <div className="p-3" style={{ position: "relative" }}>
              <Card
                card={card}
                onCardClick={handleCardClick}
                selectedCardId={selectedCardId}
              />
              <div
                style={{
                  position: "absolute",
                  left: `${card.textPosition.x}%`,
                  top: `${card.textPosition.y}%`,
                  color: "white",
                  textShadow: "1px 1px 2px black",
                }}
              >
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      {allCards.length === 0 && <p>No cards found</p>}
      {selectedCard && (
        <div>
          <button onClick={() => downloadCard(selectedCard)}>
            Download with Text
          </button>
          <button onClick={() => downloadCardDirect(selectedCard)}>
            Download Image Only
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
