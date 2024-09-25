import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import Card from "./Card.jsx";

const UserCard = () => { 

  const { currentUser } = useAuth();
  const [userCards, setUserCards] = useState([]);
  const [defaultCards] = useState([]);
  const [ setAllCards] = useState([]);

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
  }, [currentUser, defaultCards, setAllCards]); 

  useEffect(() => {
    if (currentUser) {
      fetchUserCards();
    }
  }, [currentUser, fetchUserCards]);
  return (
    <div className="user-card">
      {userCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      {userCards.length === 0 && <p>No cards found</p>}

      {Card.text && <p>{Card.text}</p>}
    </div>

    
  );
};

export default UserCard;
