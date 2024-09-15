import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { useAuth } from "../context/AuthContext.js";
import Draggable from "react-draggable"; 
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

// Components import
import Footer from "../components/Footer";
import Header from "../components/Header";
import UploadCardButton from "../components/UploadCardButton";
import CardList from "../components/CardList";
import PreviewButton from "../components/PreviewButton";
import DownloadButton from "../components/DownloadButton";

// Images import
import cardTemplate1 from "../images/card-template1.png";
import cardTemplate2 from "../images/card-template2.png";
import cardTemplate3 from "../images/card-template3.png";
import cardTemplate4 from "../images/card-template4.png";


// Popup component
const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="position-fixed top-0 start-50 translate-middle-x mt-3 bg-dark text-white p-3 rounded">
      <div>{message}</div>
    </div>
  );
};

const Home = () => {
  const { currentUser } = useAuth();

  const [cards, setCards] = useState([
    {
      id: 1,
      backgroundImage: cardTemplate1,
      text: "",
      textPosition: { x: 50, y: 50 },
    },
    {
      id: 2,
      backgroundImage: cardTemplate2,
      text: "",
      textPosition: { x: 50, y: 50 },
    },
    {
      id: 3,
      backgroundImage: cardTemplate3,
      text: "",
      textPosition: { x: 50, y: 50 },
    },
    {
      id: 4,
      backgroundImage: cardTemplate4,
      text: "",
      textPosition: { x: 50, y: 50 },
    },
  ]);


  const [inputText, setInputText] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [previewCard, setPreviewCard] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setShowLoginPopup(true);
    }
  }, [currentUser]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    if (selectedCardId !== null) {
      setCards(
        cards.map((card) =>
          card.id === selectedCardId ? { ...card, text: newText } : card
        )
      );
    }
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    const selectedCard = cards.find((card) => card.id === id);
    setInputText(selectedCard.text);
  };

  const handlePreview = () => {
    if (selectedCardId !== null) {
      const card = cards.find((card) => card.id === selectedCardId);
      setPreviewCard(card);
    }
  };

  const handleDownload = () => {
    if (selectedCardId !== null) {
      const card = cards.find((card) => card.id === selectedCardId);
      downloadCard(card);
    }
  };

  const downloadCard = (card) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = card.backgroundImage;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const fontSize = Math.min(canvas.width, canvas.height) / 10;
      ctx.font = `${fontSize}px cario`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      const textX = (canvas.width * card.textPosition.x) / 85;
      const textY = (canvas.height * card.textPosition.y) / 90;

      ctx.fillText(card.text, textX, textY);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "card.png";
      link.click();
    };
  };

  const handleUpload = (uploadedImage) => {
    const newCard = {
      id: cards.length + 1,
      backgroundImage: uploadedImage,
      text: "",
      textPosition: { x: 50, y: 50 },
    };
    setCards([...cards, newCard]);
  };

  const handleTextDrag = (e, data) => {
    if (previewCard) {
      const newPosition = {
        x: (data.x / -300) * 100,
        y: (data.y / 300) * 100,
      };

      setPreviewCard({
        ...previewCard,
        textPosition: newPosition,
      });

      setCards(
        cards.map((card) =>
          card.id === previewCard.id
            ? { ...card, textPosition: newPosition }
            : card
        )
      );
    }
  };


  const handleAdd = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      console.error("User not logged in");
      return;
    }
    
    try {
      await addDoc(collection(db, "cards"), {
        userId: currentUser.uid,
        cardId: selectedCardId,
        text: inputText,
        textPosition: cards.find(card => card.id === selectedCardId)?.textPosition,
        createdAt: new Date()
      });
      console.log("Card saved successfully");
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="Home container mt-5 d-flex flex-column align-items-center">
        {/* Login Popup */}
        {showLoginPopup && (
          <Popup
            message={`Hello ${
              currentUser.displayName
                ? currentUser.displayName
                : currentUser.email
            }, you are now logged in.`}
            onClose={() => setShowLoginPopup(false)}
          />
        )}

        {/* Logout Popup */}
        {showLogoutPopup && (
          <Popup
            message="You have been logged out successfully."
            onClose={() => setShowLogoutPopup(false)}
          />
        )}

        <div className="text-center mb-4">
          <h1 className="Text-Title text-primary">عيد أضحى مبارك!</h1>
          <h2 className="text-white">
            كل عام وأنتم بخير، أعاده الله علينا وعليكم بالصحة والسعادة والسلام.
          </h2>
          <h3 className="text-white">
            اختر البطاقة التي تناسبك وقم بكتابة اسمك على التصميم
          </h3>
        </div>

        <div className="container d-flex justify-content-center">
          <CardList
            cards={cards}
            onCardClick={handleCardClick}
            selectedCardId={selectedCardId}
          />
        </div>

        {/* Main text box */}
        <div className="my-4 w-100 d-flex justify-content-center">
          <input
            type="text"
            value={inputText}
            onChange={handleTextChange}
            placeholder="أختكم أروى"
            className="form-control text-input w-50"
            disabled={selectedCardId === null}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <DownloadButton
            handleDownload={handleDownload}
            disabled={selectedCardId === null}
          />
          <PreviewButton
            handlePreview={handlePreview}
            disabled={selectedCardId === null}
          />
        </div>

        <UploadCardButton onUpload={handleUpload} />

        {/* Preview */}
        {previewCard && (
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="position-relative">
              <div
                style={{
                  backgroundImage: `url(${previewCard.backgroundImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "350px",
                  height: "300px",
                  border: "transparent",
                  position: "relative",
                }}
              >
                <Draggable
                  onDrag={handleTextDrag}
                  position={{
                    x: (previewCard.textPosition.x / 100) * -300,
                    y: (previewCard.textPosition.y / 100) * 300,
                  }}
                  bounds="parent"
                >
                  <p
                    className="position-absolute fw-bold text-center"
                    style={{
                      fontSize: "24px",
                      color: "white",
                      transform: "translate(-50%, -50%)",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      zIndex: 1,
                      cursor: "move",
                    }}
                  >
                    {previewCard.text}
                  </p>
                </Draggable>
              </div>
            </div>
          </div>
        )}

        <button onClick={handleAdd} className="btn btn-primary mt-3">Save Card</button>  

        <Footer />
      </div>
    </>
  );
};

export default Home;
