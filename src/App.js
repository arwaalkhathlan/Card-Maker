import React, { useState } from 'react';
import CardList from './components/CardList';
import PreviewButton from './components/PreviewButton';
import DownloadButton from './components/DownloadButton';
import './styles/App.css';


import cardTemplate1 from './images/card-template1.png';
import cardTemplate2 from './images/card-template2.png';
import cardTemplate3 from './images/card-template3.png';
import cardTemplate4 from './images/card-template4.png';

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, backgroundImage: cardTemplate1, text: '' },
    { id: 2, backgroundImage: cardTemplate2, text: '' },
    { id: 3, backgroundImage: cardTemplate3, text: '' },
    { id: 4, backgroundImage: cardTemplate4, text: '' },
  ]);

  const [inputText, setInputText] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [previewCard, setPreviewCard] = useState(null);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    if (selectedCardId !== null) {
      setCards(cards.map(card =>
        card.id === selectedCardId ? { ...card, text: newText } : card
      ));
    }
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    setInputText(cards.find(card => card.id === id).text);
  };

  const handlePreview = () => {
    if (selectedCardId !== null) {
      const card = cards.find(card => card.id === selectedCardId);
      setPreviewCard(card);
    }
  };

  const handleDownload = () => {
    if (selectedCardId !== null) {
      const card = cards.find(card => card.id === selectedCardId);
      downloadCard(card);
    }
  };

  const downloadCard = (card) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = card.backgroundImage;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Determine font size based on card width
      const fontSize = Math.min(canvas.width, canvas.height) / 10; // Adjust the divisor as needed
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';

      // Calculate text position
      const textX = canvas.width / 2;
      const textY = canvas.height - (fontSize / 2);

      ctx.fillText(card.text, textX, textY);

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'card.png';
      link.click();
    };
  };

  return (
    <div className="App">

    
      <h1>عيد أضحى مبارك!</h1>
      <p>كل عام وأنتم بخير، أعاده الله علينا وعليكم بالصحة والسعادة والسلام.</p>
      <p>اختر البطاقة التي تناسبك وقم بكتابة اسمك على التصميم</p>
      
    


      <div className='container'>
      
      <CardList
        cards={cards}
        onCardClick={handleCardClick}
        selectedCardId={selectedCardId}
      />

      </div>

      <div className='container'>

      <input
        type="text"
        value={inputText}
        onChange={handleTextChange}
        placeholder="Enter text for the selected card"
        className="text-input"
        disabled={selectedCardId === null}
      />
      

      </div>

      <div className='container'>
      <PreviewButton
        handlePreview={handlePreview}
        disabled={selectedCardId === null}
      />
      <DownloadButton
        handleDownload={handleDownload}
        disabled={selectedCardId === null}
      />
      
      </div>
      
      
      

      {previewCard && (
        <div className="preview-container">
          <div
            className="card-preview"
            style={{
              backgroundImage: `url(${previewCard.backgroundImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              marginTop: '10px',
              width: '350px',
              minHeight: '300px',
              border: '1px solid #ccc',
              position: 'relative',
            }}
          >
            <p className="card-text">{previewCard.text}</p>
          </div>
        </div>
      )}
    
    
    </div>
  );
};

export default App;
