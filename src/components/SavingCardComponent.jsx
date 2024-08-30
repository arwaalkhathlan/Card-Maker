import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

const SavingCardComponent = ({ db, cardData, userId, onSave }) => {
  useEffect(() => {
    const saveCardToFirestore = async () => {
      try {
        const docRef = await addDoc(collection(db, "cards"), {
          cardId: cardData.id,
          backgroundImage: cardData.backgroundImage,
          cardText: cardData.text,
          userId,
        });
        console.log("Document written with ID: ", docRef.id);
        onSave(); 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    if (cardData && cardData.id && cardData.backgroundImage && cardData.text && userId) {
      saveCardToFirestore();
    }
  }, [cardData, userId, db, onSave]); 

  return null; 
};

export default SavingCardComponent;
