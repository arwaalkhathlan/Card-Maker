import React, { useState } from "react";
import CardList from "./components/CardList";
import PreviewButton from "./components/PreviewButton";
import DownloadButton from "./components/DownloadButton";
import "./styles/App.css";
import Footer from "./components/Footer";

import cardTemplate1 from "./images/card-template1.png";
import cardTemplate2 from "./images/card-template2.png";
import cardTemplate3 from "./images/card-template3.png";
import cardTemplate4 from "./images/card-template4.png";

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, backgroundImage: cardTemplate1, text: "" },
    { id: 2, backgroundImage: cardTemplate2, text: "" },
    { id: 3, backgroundImage: cardTemplate3, text: "" },
    { id: 4, backgroundImage: cardTemplate4, text: "" },
  ]);

  const [inputText, setInputText] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [previewCard, setPreviewCard] = useState(null);

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
    setInputText(cards.find((card) => card.id === id).text);
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
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      const textX = canvas.width / 2;
      const textY = canvas.height - fontSize / 2;

      ctx.fillText(card.text, textX, textY);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "card.png";
      link.click();
    };
  };

  return (
    <div className="App mt-5">
      <div className="container">
        <div className="  mb-4">
          <h1 className="Text-Title">عيد أضحى مبارك!</h1>
          <h2 >
            كل عام وأنتم بخير، أعاده الله علينا وعليكم بالصحة والسعادة والسلام.
          </h2>
          <h3 >اختر البطاقة التي تناسبك وقم بكتابة اسمك على التصميم</h3>
        </div>

        <div className="row">
          <div className="col-12">
            <CardList
              cards={cards}
              onCardClick={handleCardClick}
              selectedCardId={selectedCardId}
            />
          </div>
        </div>

        <div className="row container justify-content-center ">
          <div className="col-md-6">
            <input
              type="text"
              value={inputText}
              onChange={handleTextChange}
              placeholder="أختكم أروى"
              className="form-control text-input "
              disabled={selectedCardId === null}
            />
          </div>
        </div>
      </div>

      <div className=" row container justify-content-center ">
        <div className="col-md-6 ">
          <DownloadButton
            handleDownload={handleDownload}
            disabled={selectedCardId === null}
          />
          <PreviewButton
            className="btn btn-primary"
            handlePreview={handlePreview}
            disabled={selectedCardId === null}
          />
        </div>
      </div>

      {previewCard && (
        <div className="container d-flex justify-content-center align-items-center">
          <div className="col-md-3 position-relative">
            <div
              style={{
                backgroundImage: `url(${previewCard.backgroundImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                minWidth: "350px",
                height: "300px",
                border: "transparent",
                position: "relative",
              }}
            >
              <p
                className="position-absolute fw-bold text-center"
                style={{
                  fontSize: "24px",
                  color: "white",
                  transform: "translate(-42%, 850%)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  width: "350px",
                }}
              >
                {previewCard.text}
              </p>
            </div>
          </div>
        </div>
      )}

      

      <Footer/>
    </div>
  );
};

export default App;
